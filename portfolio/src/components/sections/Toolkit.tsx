import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";
import { FaFigma } from "react-icons/fa";
import {
    Code2,
    Film,
    Gauge,
    Layers3,
    MonitorSmartphone,
    Palette,
    PenTool,
    Sparkles,
    Wand2,
} from "lucide-react";

const tools = [
    {
        name: "Adobe Premiere Pro",
        description: "Precision editing, cinematic pacing, and polished storytelling.",
        icon: Film,
    },
    {
        name: "Adobe After Effects",
        description: "Motion design, transitions, and high-end visual effects.",
        icon: Sparkles,
    },
    {
        name: "DaVinci Resolve",
        description: "Color grading, finishing, and professional post-production control.",
        icon: Palette,
    },
    {
        name: "Photoshop",
        description: "Retouching, compositing, and detailed visual refinement.",
        icon: Wand2,
    },
    {
        name: "Illustrator",
        description: "Vector design, branding assets, and visual systems.",
        icon: PenTool,
    },
    {
        name: "Blender",
        description: "3D motion graphics, environments, and product visuals.",
        icon: Layers3,
    },
    {
        name: "Figma",
        description: "Rapid prototyping, UI design, and collaborative creative workflows.",
        icon: FaFigma,
    },
    {
        name: "VS Code",
        description: "Clean development workflow for modern web experiences.",
        icon: Code2,
    },
    {
        name: "React",
        description: "Interactive interfaces built for performance and scalability.",
        icon: MonitorSmartphone,
    },
    {
        name: "TypeScript",
        description: "Reliable, scalable logic and cleaner application architecture.",
        icon: Gauge,
    },
    {
        name: "Tailwind CSS",
        description: "Fast, flexible styling for premium visual polish.",
        icon: Sparkles,
    },
    {
        name: "Framer Motion",
        description: "Smooth animations, motion storytelling, and elegant micro-interactions.",
        icon: Layers3,
    },
];

interface ToolkitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Toolkit({ isOpen, onClose }: ToolkitModalProps) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-xl sm:p-6"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="relative w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0d]/90 shadow-2xl shadow-black/40"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            type="button"
                            aria-label="Close toolkit modal"
                            onClick={onClose}
                            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground backdrop-blur transition hover:bg-white/10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="max-h-[92vh] overflow-y-auto px-6 pb-10 pt-16 sm:px-8 lg:px-10">
                            <div className="mx-auto mb-10 max-w-3xl text-center">
                                <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                                    Tools We Use
                                </span>
                                <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                                    Professional software and technologies powering our creative workflow.
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {tools.map((tool, index) => {
                                    const Icon = tool.icon;
                                    return (
                                        <motion.article
                                            key={tool.name}
                                            initial={{ opacity: 0, y: 18 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.03 }}
                                            whileHover={{ y: -6 }}
                                            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition-all duration-300 hover:border-white/15 hover:bg-white/8"
                                        >
                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/5 text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="mb-2 text-xl font-semibold text-foreground">{tool.name}</h3>
                                            <p className="text-sm leading-6 text-muted-foreground">{tool.description}</p>
                                        </motion.article>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}