import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import teamImage from "@/assets/team.svg";

export default function TeamMembers() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <section id="team" className="bg-background py-24 transition-colors duration-300 md:py-32">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-12 max-w-4xl text-center"
                    >
                        <span className="mb-4 block text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
                            OUR TEAM
                        </span>
                        <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                            Meet the talented people behind our success.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mx-auto max-w-7xl"
                    >
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="group block w-full overflow-hidden rounded-3xl border border-border bg-card/50 outline-none ring-0 transition duration-300 hover:border-foreground/15"
                        >
                            <img
                                src={teamImage}
                                alt="Our team"
                                loading="lazy"
                                className="h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                            />
                        </button>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.96, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-background/80"
                            onClick={(e) => e.stopPropagation()}
                            role="dialog"
                            aria-modal="true"
                        >
                            <button
                                type="button"
                                aria-label="Close team preview"
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <img
                                src={teamImage}
                                alt="Full team preview"
                                className="max-h-[90vh] w-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
