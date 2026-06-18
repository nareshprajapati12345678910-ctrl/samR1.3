import { motion } from "framer-motion";
import teamImage from "@/assets/team.svg";

export default function TeamMembers() {
    return (
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
                    <div className="group overflow-hidden rounded-3xl border border-border bg-card/50">
                        <img
                            src={teamImage}
                            alt="Our team"
                            loading="lazy"
                            className="h-auto w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
