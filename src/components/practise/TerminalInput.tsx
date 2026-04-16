import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface TerminalInputProps {
    value: string;
    onChange: (value: string) => void;
    onEnter: () => void;
    disabled?: boolean;
    history?: string[];
    placeholder?: string;
    promptLabel?: string;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
    value,
    onChange,
    onEnter,
    disabled = false,
    history = [],
    placeholder = "Type command...",
    promptLabel = "user@terminal:~$"
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [historyIndex, setHistoryIndex] = React.useState<number>(-1);

    // Auto-focus logic
    useEffect(() => {
        if (!disabled && inputRef.current) {
            inputRef.current.focus();
        }
    }, [disabled]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onEnter();
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                // history is usually newest first? or oldest first? 
                // Typically history lists are appended to. So last item is most recent.
                // Let's assume history is [cmd1, cmd2, cmd3]
                // Arrow Up should go cmd3 -> cmd2 -> cmd1
                // So we need to traverse backwards.

                // Let's rethink index. -1 means "current input". 0 means "most recent" in a reversed view, or we can use standard array indices.
                // Let's assume history starts 0 as oldest.
                // history: ["ls", "cd", "nmap"]
                // Up arrow: nmap -> cd -> ls

                // Let's simplify: passing reversed history might be easier, or just index math.
                // Let's say index refers to "distance from end". 
                // 0 = last item. 1 = second to last.

                // Actually, let's keep it standard.
                // If index is -1, we are at "new line".
                // Up arrow moves index to history.length - 1 (end). Then -2, etc.

                if (historyIndex === -1) {
                    const lastIndex = history.length - 1;
                    setHistoryIndex(lastIndex);
                    onChange(history[lastIndex]);
                } else if (historyIndex > 0) {
                    const newIdx = historyIndex - 1;
                    setHistoryIndex(newIdx);
                    onChange(history[newIdx]);
                }
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                if (historyIndex < history.length - 1) {
                    const newIdx = historyIndex + 1;
                    setHistoryIndex(newIdx);
                    onChange(history[newIdx]);
                } else {
                    setHistoryIndex(-1);
                    onChange("");
                }
            }
        }
    };

    // Click anywhere on wrapper to focus input
    const handleClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div
            className={cn(
                "flex items-center w-full bg-black/90 p-4 rounded-md font-mono text-sm md:text-base overflow-hidden border border-slate-800 shadow-xl",
                "focus-within:ring-1 focus-within:ring-green-500/50 transition-all duration-300",
                disabled && "opacity-70 cursor-not-allowed"
            )}
            onClick={handleClick}
        >
            <div className="flex-shrink-0 mr-3 text-green-500 font-bold select-none">
                {promptLabel}
            </div>
            <div className="flex-grow relative">
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={disabled}
                    className="w-full bg-transparent border-none outline-none text-gray-100 placeholder:text-gray-600 caret-transparent"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
                {/* Custom blinking cursor positioned at the end of text */}
                <span
                    className="absolute top-0 pointer-events-none text-transparent bg-green-500 w-[10px] h-[1.2em] animate-pulse"
                    style={{
                        left: `${value.length}ch`,
                        display: disabled ? 'none' : 'block'
                    }}
                />
                {/* Mirror text to ensure cursor positioning is roughly correct (simple approximation with ch units works for monospaced fonts usually, but for perfect alignment prompt matching is better. For now simple `ch` unit logic on input value length is decent for monospace) */}

                {/* 
           Better cursor approach:
           Hide real cursor (caret-color: transparent).
           We can just rely on the input's own cursor if we want, but for "block" cursor request usually found in terminals:
           A block cursor is hard to implement perfectly on an input field without significant hacks.
           An underscore or just using standard cursor is safer. 
           The prompt asked for "Blinking cursor...".
           I'll use a simple CSS trick or just standard input with custom color.
           Tailwind `caret-green-500` is simpler and robust. 
           Blinking block cursor is cool but can be glitchy with text wrapping.
           Let's stick to `caret-green-500` and `caret-shape` if supported, or just color.
           Wait, "Terminal-style... blinking cursor" often implies the block.
           Let's try the block cursor implementation:
           We can render the value in a span and put the cursor after it.
           But validation/editing needs an input.
           Solution: Invisible input on top of a visual display.
        */}
            </div>

            {/* Re-implementing with transparent input overlay method for perfect terminal look */}
            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
        </div>
    );
};

// Start over with a simpler robust implementation 
// Just using a standard input styled to look like a terminal
// Custom block cursor is tricky to get right with text wrapping and scrolling.
// I will use `caret-green-500` and a fat cursor if possible, strictly mostly mimicking the color scheme.

export const TerminalInputSimple: React.FC<TerminalInputProps> = ({
    value,
    onChange,
    onEnter,
    disabled = false,
    history = [],
    promptLabel = "root@kali:~#"
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [historyIndex, setHistoryIndex] = React.useState<number>(-1);

    useEffect(() => {
        if (!disabled && inputRef.current) {
            inputRef.current.focus(); // Focus on mount/enable
        }
    }, [disabled]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onEnter();
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (history.length > 0) {
                // ... same history logic ... 
                // Assuming history is [oldest, ..., newest]
                if (historyIndex === -1) {
                    const lastIndex = history.length - 1;
                    setHistoryIndex(lastIndex);
                    onChange(history[lastIndex]);
                } else if (historyIndex > 0) {
                    const newIdx = historyIndex - 1;
                    setHistoryIndex(newIdx);
                    onChange(history[newIdx]);
                }
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                if (historyIndex < history.length - 1) {
                    const newIdx = historyIndex + 1;
                    setHistoryIndex(newIdx);
                    onChange(history[newIdx]);
                } else {
                    setHistoryIndex(-1);
                    onChange("");
                }
            }
        }
    };

    return (
        <div
            className={cn(
                "group flex w-full bg-black p-4 rounded-lg font-mono text-base shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10",
                "focus-within:border-green-500/50 focus-within:ring-1 focus-within:ring-green-500/20 transition-all",
                disabled && "opacity-50 grayscale"
            )}
            onClick={() => inputRef.current?.focus()}
        >
            <span className="flex-shrink-0 mr-3 font-bold text-green-500 select-none">
                {promptLabel}
            </span>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                className="flex-grow bg-transparent border-none outline-none text-white caret-green-500 font-medium"
                autoComplete="off"
                spellCheck="false"
            />
        </div>
    );
};

export default TerminalInputSimple;
