import React, { useState, useEffect, useMemo } from 'react';
import { TerminalInputSimple } from '@/components/practise/TerminalInput';
import { SuccessAnimation } from '@/components/practise/SuccessAnimation';
import { FailureAnimation } from '@/components/practise/FailureAnimation';
import { usePracticeChallenges, Challenge } from '@/hooks/usePracticeChallenges';
import { Loader2, Terminal, AlertCircle, Trophy, History, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export const PracticePage = () => {
    const { challenges, isLoading, error } = usePracticeChallenges();

    // State
    const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
    const [inputValue, setInputValue] = useState("");
    const [feedbackState, setFeedbackState] = useState<'idle' | 'success' | 'failure'>('idle');
    const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('practice_completed_ids');
        if (saved) {
            try {
                setCompletedIds(new Set(JSON.parse(saved)));
            } catch (e) {
                console.error("Failed to parse saved progress", e);
            }
        }
    }, []);

    // Compute active challenge
    // We memorize this calculation to avoid jitter, but we need it to update when challenges load or completedIds change
    useEffect(() => {
        if (challenges.length > 0) {
            // Find the first challenge that hasn't been completed
            const next = challenges.find(c => !completedIds.has(c.id));
            setCurrentChallenge(next || null);
        }
    }, [challenges, completedIds]);

    const progressPercentage = useMemo(() => {
        if (challenges.length === 0) return 0;
        return Math.round((completedIds.size / challenges.length) * 100);
    }, [challenges.length, completedIds.size]);

    // Extract context for display
    const contextParams = useMemo(() => {
        if (!currentChallenge) return [];
        const params: { label: string; value: string }[] = [];
        const cmd = currentChallenge.command;

        // Extract IP
        const ipMatch = cmd.match(/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/);
        if (ipMatch) params.push({ label: 'Target IP', value: ipMatch[0] });

        // Extract Interface
        const ifaceMatch = cmd.match(/\b(eth|wlan|ens|enp|mon|tun|tap|docker|vboxnet)\d+(?:mon)?\b/);
        if (ifaceMatch) params.push({ label: 'Interface', value: ifaceMatch[0] });

        // Extract MAC Address
        const macMatch = cmd.match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/);
        if (macMatch) params.push({ label: 'Target MAC', value: macMatch[0] });

        // Extract URL
        const urlMatch = cmd.match(/(https?:\/\/[^\s]+)/);
        if (urlMatch) params.push({ label: 'Target URL', value: urlMatch[0] });

        // Extract Port (heuristic: -p 80 or similar)
        const portMatch = cmd.match(/-p\s*(\d+(?:-\d+)?(?:,\d+)*)/);
        if (portMatch) params.push({ label: 'Port', value: portMatch[1] });

        return params;
    }, [currentChallenge]);



    // Command Validation Logic
    const handleRun = () => {
        if (!currentChallenge || !inputValue.trim()) return;

        // 1. Normalization Helper
        const normalizeParams = (str: string) => {
            let s = str.trim();

            // Normalize IPs (IPv4) -> {{IP}}
            const ipRegex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g;
            s = s.replace(ipRegex, '{{IP}}');

            // Normalize Interfaces (eth0, wlan0mon, ens33, tun0) -> {{IFACE}}
            // Matches common linux interface patterns
            const ifaceRegex = /\b(eth|wlan|ens|enp|mon|tun|tap|docker|vboxnet)\d+(?:mon)?\b/g;
            s = s.replace(ifaceRegex, '{{IFACE}}');

            // Normalize common placeholders in the target string
            // We do this to ensure "nmap <IP>" matches "nmap {{IP}}" (after user input normalization)
            const placeholderRegex = /<(?:ip|target|host|address|interface|iface|adapter|port|file|path)[^>]*>|\[(?:ip|target|host|address|interface|iface|adapter|port|file|path)[^\]]*\]/gi;
            s = s.replace(placeholderRegex, (match) => {
                const lower = match.toLowerCase();
                if (lower.includes('ip') || lower.includes('target') || lower.includes('host') || lower.includes('address')) return '{{IP}}';
                if (lower.includes('interface') || lower.includes('iface') || lower.includes('adapter')) return '{{IFACE}}';
                return match;
            });

            return s;
        };

        const normInput = normalizeParams(inputValue);
        const normTarget = normalizeParams(currentChallenge.command);

        // 2. Tokenization & Set Comparison (Bag of Words)
        // This handles "nmap -sV -p 80" == "nmap -p 80 -sV"

        const tokenize = (str: string) => str.split(/\s+/).filter(Boolean).sort();

        const inputTokens = tokenize(normInput);
        const targetTokens = tokenize(normTarget);

        // 3. Exact Array Comparison of Sorted Tokens
        const isMatch = (
            inputTokens.length === targetTokens.length &&
            inputTokens.every((val, index) => val === targetTokens[index])
        );

        if (isMatch) {
            setFeedbackState('success');
        } else {
            setFeedbackState('failure');
        }
    };

    const handleSuccessComplete = () => {
        if (currentChallenge) {
            const newSet = new Set(completedIds);
            newSet.add(currentChallenge.id);
            setCompletedIds(newSet);
            localStorage.setItem('practice_completed_ids', JSON.stringify([...newSet]));

            setInputValue("");
            setFeedbackState('idle');
            toast.success("Command Mastery Recorded", {
                description: `Progress: ${newSet.size} / ${challenges.length}`,
                duration: 2000,
            });
        }
    };

    const handleRetry = () => {
        setFeedbackState('idle');
        // Keep input value for editing
    };

    const handleSkip = () => {
        if (currentChallenge) {
            // We just pretend it's completed for this session? 
            // Or strictly strictly only mark completed if done?
            // Let's just move to next by adding to a "skipped" session set? 
            // User asked for "all commands captured".
            // Let's just mark it as completed but maybe with a flag? 
            // For simplicity, let's just mark it done to view next, but maybe visually warn.
            // Or simpler: Just append to completed list to move on.
            const newSet = new Set(completedIds);
            newSet.add(currentChallenge.id);
            setCompletedIds(newSet);
            localStorage.setItem('practice_completed_ids', JSON.stringify([...newSet]));
            setInputValue("");
            setFeedbackState('idle');
            toast("Challenge Skipped", { icon: <SkipForward className="w-4 h-4 text-amber-500" /> });
        }
    };

    const handleResetProgress = () => {
        if (confirm("Are you sure you want to reset your practice progress?")) {
            setCompletedIds(new Set());
            localStorage.removeItem('practice_completed_ids');
            window.location.reload();
        }
    };

    if (isLoading) {
        return (
            <div className="flex h-[80vh] items-center justify-center flex-col gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse font-mono">Loading command database...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-[80vh] items-center justify-center flex-col gap-4 text-red-500">
                <AlertCircle className="h-12 w-12" />
                <p>Error loading challenges: {error}</p>
                <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
        );
    }

    if (!currentChallenge && challenges.length > 0) {
        return (
            <div className="flex h-[80vh] items-center justify-center flex-col gap-6 text-center px-4">
                <Trophy className="h-24 w-24 text-yellow-500 animate-bounce" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    All Systems Go!
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                    You've completed all {challenges.length} available command challenges. Amazing work!
                </p>
                <div className="flex gap-4">
                    <Button variant="outline" onClick={handleResetProgress}>
                        <History className="mr-2 h-4 w-4" /> Reset Progress
                    </Button>
                </div>
            </div>
        );
    }



    // Self-Verify Logic
    const handleVerify = () => {
        if (!currentChallenge || !inputValue.trim()) return;
        setFeedbackState('verifying'); // New state for showing comparison
    };

    const handleSelfCorrect = (isCorrect: boolean) => {
        if (isCorrect) {
            handleSuccessComplete();
        } else {
            // "Missed it" - just show next or reset?
            // Usually "Missed it" means we might want to retry or just move on.
            // Let's just reset for retry to keep it simple, or skip.
            // User probably wants to "mark as failed/skipped" or "retry".
            // Let's treat "Missed it" as a retry opportunity for now, or just close the comparison to try again.
            setFeedbackState('idle'); // Allow retry
        }
    };

    return (
        <div className="container max-w-5xl mx-auto py-8 px-4 md:px-6 min-h-[calc(100vh-4rem)] flex flex-col">
            {/* Header Stats */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-2">
                        <Terminal className="w-8 h-8 text-primary" />
                        Command Practice
                    </h1>
                    <p className="text-muted-foreground">
                        Master {challenges.length} cybersecurity commands in a simulated environment.
                    </p>
                </div>

                <div className="w-full md:w-64 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                        <span>Progress</span>
                        <span>{completedIds.size}/{challenges.length}</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                </div>
            </div>

            {/* Main Practice Area */}
            <div className="flex-1 flex flex-col gap-6 relative">
                {feedbackState === 'success' && (
                    <SuccessAnimation onComplete={() => {
                        setFeedbackState('idle');
                        // Advance logic handles in handleSuccessComplete
                    }} />
                )}

                {/* Challenge Card */}
                <Card className="flex-1 bg-gradient-to-b from-card to-background border-muted/40 shadow-sm relative overflow-hidden">
                    {/* Subtle background decoration */}
                    <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="p-6 md:p-10 flex flex-col h-full gap-8">
                        {/* Question Section */}
                        <div className="space-y-4 relative z-10">
                            <div className="flex items-center gap-3">
                                <Badge variant="outline" className="px-3 py-1 text-xs font-mono uppercase tracking-wider bg-background/50 backdrop-blur">
                                    {currentChallenge?.category}
                                </Badge>
                                <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
                                <span className="text-sm font-medium text-primary/80 font-mono">
                                    {currentChallenge?.tool}
                                </span>

                            </div>

                            <div className="space-y-2">
                                <h2 className="text-xl md:text-2xl font-medium leading-relaxed">
                                    Using <span className="text-primary font-bold">"{currentChallenge?.tool}"</span>: {currentChallenge?.explanation}
                                </h2>
                            </div>

                            {/* Mission Context Parameters */}
                            {contextParams.length > 0 && (
                                <div className="flex flex-wrap gap-3 mt-4 p-4 bg-muted/30 rounded border border-muted/50 border-dashed">
                                    <div className="w-full text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" />
                                        Mission Parameters
                                    </div>
                                    {contextParams.map((param, i) => (
                                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-background rounded border border-border text-sm font-mono shadow-sm">
                                            <span className="text-muted-foreground text-xs">{param.label}:</span>
                                            <span className="text-primary font-medium select-all">{param.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Terminal Interface */}
                        <div className="mt-auto space-y-6 relative z-10">
                            <TerminalInputSimple
                                value={inputValue}
                                onChange={setInputValue}
                                onEnter={handleVerify}
                                disabled={feedbackState === 'success' || feedbackState === 'verifying'}
                                promptLabel="root@terminal:~#"
                            />

                            {/* Verification UI - Comparisons */}
                            {feedbackState === 'verifying' && (
                                <div className="animate-in slide-in-from-top-2 fade-in duration-300 rounded-lg border border-border bg-muted/40 p-4 space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <p className="text-xs font-mono uppercase text-muted-foreground">Your Command</p>
                                            <div className="p-3 rounded bg-black/20 font-mono text-sm border border-white/10 break-all">
                                                {inputValue}
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-mono uppercase text-green-500/80">Correct Answer</p>
                                            <div className="p-3 rounded bg-green-500/10 font-mono text-sm border border-green-500/20 text-green-400 break-all">
                                                {currentChallenge?.command}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-2 flex flex-col items-center gap-3">
                                        <p className="text-sm font-medium text-center">Did you get it right?</p>
                                        <div className="flex gap-3 w-full justify-center">
                                            <Button
                                                variant="outline"
                                                className="w-32 border-red-500/20 hover:bg-red-500/10 hover:text-red-400"
                                                onClick={() => handleSelfCorrect(false)}
                                            >
                                                No, Retry
                                            </Button>
                                            <Button
                                                className="w-32 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/20"
                                                onClick={() => handleSelfCorrect(true)}
                                            >
                                                Yes, Correct
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Controls */}
                            {feedbackState !== 'verifying' && feedbackState !== 'success' && (
                                <div className="flex gap-3 justify-end items-center">
                                    <Button
                                        variant="ghost"
                                        onClick={handleSkip}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Skip
                                    </Button>
                                    <Button
                                        onClick={handleVerify}
                                        disabled={!inputValue.trim()}
                                        className="min-w-[120px] shadow-lg shadow-primary/20"
                                    >
                                        Verify Answer
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PracticePage;
