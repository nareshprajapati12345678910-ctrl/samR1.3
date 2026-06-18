import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoShowcase() {
  return (
    <section id="showcase" className="bg-background py-24 text-foreground transition-colors duration-300 md:py-32 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Showcase</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">The Reel.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video overflow-hidden border border-border bg-card/80 group flex cursor-pointer items-center justify-center">
            {/* Placeholder for actual iframe embed */}
            <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-40 grayscale mix-blend-screen transition-transform duration-1000 group-hover:scale-105"></div>

            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center z-10 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <Play className="w-8 h-8 ml-1" />
            </div>

            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-white text-xl font-bold">Director's Cut </h3>
              <p className="text-zinc-400 text-sm">Cinematic Editing & Color Grading</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}