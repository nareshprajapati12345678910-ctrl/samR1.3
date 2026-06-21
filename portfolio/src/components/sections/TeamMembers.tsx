import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X } from "lucide-react";

interface TeamModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const teamImages = [
    "/images/team/Sameer.png",
    "/images/team/Naresh.png",
    "/images/team/Sujal.png",
    "/images/team/Saniya.png",
    "/images/team/Aniket.png",
];

export default function TeamMembers({ isOpen, onClose }: TeamModalProps) {
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
                            aria-label="Close team preview"
                            onClick={onClose}
                            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground backdrop-blur transition hover:bg-white/10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="max-h-[92vh] overflow-auto">
                            <div className="space-y-4 p-3 sm:p-6">
                                {teamImages.map((image, index) => (
                                    <img
                                        key={image}
                                        src={image}
                                        alt={`Team member ${index + 1}`}
                                        loading="lazy"
                                        className="mx-auto h-auto w-full max-w-4xl rounded-2xl object-contain"
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
