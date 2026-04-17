import { useState, useEffect } from 'react';
import { CATEGORY_TOOLS } from './useCategoryTools';

export interface Challenge {
    id: string; // Unique ID composed of tool + commandId
    tool: string;
    category: string;
    command: string;
    explanation: string;
    difficulty?: string;
}

interface UsePracticeChallengesReturn {
    challenges: Challenge[];
    isLoading: boolean;
    error: string | null;
}

export function usePracticeChallenges(): UsePracticeChallengesReturn {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                const allChallenges: Challenge[] = [];
                const fetchPromises: Promise<void>[] = [];

                // Iterate through all categories, groups, and tools to fetch JSONs
                for (const [category, groups] of Object.entries(CATEGORY_TOOLS)) {
                    for (const group of groups as unknown as { groupName: string, tools: string[] }[]) {
                        for (const tool of group.tools) {
                            fetchPromises.push(
                                fetch(`/jsons/${category}/${tool}.json`)
                                    .then(res => {
                                        if (!res.ok) throw new Error(`Failed to load ${tool}`);
                                        return res.json();
                                    })
                                    .then(data => {
                                        if (data.commands && Array.isArray(data.commands)) {
                                            data.commands.forEach((cmd: any) => {
                                                // Filter out extremely simple commands if needed, or keep all
                                                // For now, keeping all valid commands with an explanation
                                                if (cmd.command && cmd.explanation) {
                                                    allChallenges.push({
                                                        id: `${tool}-${cmd.id}`,
                                                        tool: tool,
                                                        category: category,
                                                        command: cmd.command,
                                                        explanation: cmd.explanation,
                                                        difficulty: 'standard' // Default for now
                                                    });
                                                }
                                            });
                                        }
                                    })
                                    .catch(err => {
                                        console.warn(`Skipping tool ${tool}:`, err);
                                        // Don't fail entire load for individual tool failures
                                    })
                            );
                        }
                    }
                }

                await Promise.all(fetchPromises);

                if (allChallenges.length === 0) {
                    throw new Error("No challenges could be loaded.");
                }

                // Apply hourly shuffle
                const hourTimestamp = Math.floor(Date.now() / 3600000); // Current hour timestamp
                const shuffled = shuffleWithSeed(allChallenges, hourTimestamp);

                setChallenges(shuffled);
                setIsLoading(false);
            } catch (err: any) {
                setError(err.message || "Failed to load challenges");
                setIsLoading(false);
            }
        };

        fetchChallenges();
    }, []);

    return { challenges, isLoading, error };
}

// Simple seeded shuffle (Fisher-Yates variant)
function shuffleWithSeed<T>(array: T[], seed: number): T[] {
    const shuffled = [...array];
    let m = shuffled.length;
    let t: T;
    let i: number;

    // Linear Congruential Generator for consistent pseudo-randomness
    const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };

    while (m) {
        i = Math.floor(random() * m--);
        t = shuffled[m];
        shuffled[m] = shuffled[i];
        shuffled[i] = t;
    }

    return shuffled;
}
