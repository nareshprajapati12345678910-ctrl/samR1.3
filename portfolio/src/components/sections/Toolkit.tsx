import { motion } from "framer-motion";
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

export default function Toolkit() {
    return (
        <section id="toolkit" className="bg-background py-24 transition-colors duration-300 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                        Tools We Use
                    </span>
                    <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                        Professional software and technologies powering our creative workflow.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <motion.article
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                                whileHover={{ y: -6 }}
                                className="group rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:border-foreground/10 hover:bg-card"
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
        </section>
    );
}