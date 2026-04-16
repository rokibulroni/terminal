import React from 'react';
import { XCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FailureAnimationProps {
    hint?: string;
    correctAnswer?: string;
    attemptedCommand?: string;
    onRetry: () => void;
}

export const FailureAnimation: React.FC<FailureAnimationProps> = ({
    hint,
    correctAnswer,
    attemptedCommand,
    onRetry
}) => {
    const [showAnswer, setShowAnswer] = React.useState(false);

    return (
        <div className="rounded-lg border border-red-500/20 bg-red-950/10 p-4 mt-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-start gap-4">
                <div className="mt-1">
                    <XCircle className="w-6 h-6 text-red-500" />
                </div>

                <div className="flex-1 space-y-2">
                    <h4 className="text-base font-semibold text-red-500 font-mono">
                        Command Verification Failed
                    </h4>

                    <div className="text-sm text-red-400/90 font-mono space-y-1">
                        <p>Access denied. Syntax error or invalid parameters.</p>
                        {attemptedCommand && (
                            <p className="opacity-70 line-through decoration-red-500/50">{attemptedCommand}</p>
                        )}
                    </div>

                    {hint && (
                        <div className="flex items-start gap-2 mt-3 p-3 bg-red-500/5 border border-red-500/10 rounded">
                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-amber-500/90 font-mono">{hint}</p>
                        </div>
                    )}

                    {showAnswer ? (
                        <div className="mt-4 p-3 bg-black/40 rounded border border-green-500/20">
                            <p className="text-xs text-gray-400 mb-1 font-mono uppercase">Correct Syntax:</p>
                            <code className="text-sm text-green-400 font-mono break-all select-all">
                                {correctAnswer}
                            </code>
                        </div>
                    ) : (
                        <div className="flex gap-3 pt-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onRetry}
                                className="bg-transparent border-red-500/30 text-red-400 hover:bg-red-950/30 hover:text-red-300 h-8"
                            >
                                Try Again
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAnswer(true)}
                                className="text-gray-400 hover:text-white h-8"
                            >
                                <HelpCircle className="w-3 h-3 mr-2" />
                                Show Solution
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FailureAnimation;
