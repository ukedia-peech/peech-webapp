import React from 'react';
import { motion } from 'framer-motion';
import { customEasing } from '../../utils/animations';

function FloatingPaths({ position }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(249, 115, 22, ${0.1 + i * 0.03})`, // Using primary orange color
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-primary-500"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    className = "",
    children
}) {
    const words = title.split(" ");

    return (
        <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black-950 ${className}`}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container-custom text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: customEasing.fluid }}
                    className="max-w-4xl mx-auto"
                >
                    {children || (
                        <>
                            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                                {words.map((word, wordIndex) => (
                                    <span
                                        key={wordIndex}
                                        className="inline-block mr-4 last:mr-0"
                                    >
                                        {word.split("").map((letter, letterIndex) => (
                                            <motion.span
                                                key={`${wordIndex}-${letterIndex}`}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    delay:
                                                        wordIndex * 0.1 +
                                                        letterIndex * 0.03,
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 25,
                                                }}
                                                className="inline-block text-transparent bg-clip-text 
                                                bg-gradient-to-r from-white to-gray-300"
                                            >
                                                {letter}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>

                            <div
                                className="inline-block group relative bg-gradient-to-b from-primary-500/20 to-primary-600/20 
                                p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                    bg-black-900/95 hover:bg-black-900/100 text-white transition-all duration-300 
                                    group-hover:-translate-y-0.5 border border-primary-500/20
                                    hover:shadow-md hover:shadow-primary-500/20"
                                >
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        Discover Excellence
                                    </span>
                                    <motion.span
                                        className="ml-3 opacity-70 group-hover:opacity-100"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: customEasing.fluid,
                                        }}
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

// Standalone FloatingPaths component for use in other sections
export function FloatingPathsBackground({ className = "" }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}

export default BackgroundPaths; 