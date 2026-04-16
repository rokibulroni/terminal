import React from 'react';
import { CheckCircle, Terminal } from 'lucide-react';
import { cn } from "@/lib/utils";

interface SuccessAnimationProps {
    message?: string;
    onComplete?: () => void;
}

export const SuccessAnimation: React.FC<SuccessAnimationProps> = ({
    message = "Operation Successful",
    onComplete
}) => {
    // Auto-complete trigger if needed, though parent might control timing
    React.useEffect(() => {
        if (onComplete) {
            const timer = setTimeout(onComplete, 2000);
            return () => clearTimeout(timer);
        }
    }, [onComplete]);

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10 animate-in fade-in duration-300">
            <div className="flex flex-col items-center p-8 bg-black border border-green-500/30 rounded-xl shadow-[0_0_50px_rgba(34,197,94,0.2)] transform animate-in zoom-in-95 duration-300">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 animate-pulse rounded-full"></div>
                    <CheckCircle className="w-16 h-16 text-green-500 relative z-10" strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-green-500 mb-2 font-mono tracking-tight">
                    System Access Granted
                </h3>

                <p className="text-green-400/80 font-mono text-center max-w-xs mb-6">
                    {message}
                </p>

                <div className="flex items-center gap-2 px-4 py-2 bg-green-950/30 rounded border border-green-900/50 text-xs font-mono text-green-400">
                    <Terminal className="w-3 h-3" />
                    <span>status: 0 (OK)</span>
                </div>
            </div>
        </div>
    );
};

export default SuccessAnimation;
