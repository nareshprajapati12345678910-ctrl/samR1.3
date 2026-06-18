import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Precision.<br />
                Pacing.<br />
                <span className="italic text-muted-foreground">Purpose.</span>
              </h2>
              <div className="w-12 h-px bg-foreground mb-8"></div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-neutral max-w-none font-light text-secondary-foreground"
            >
              <p className="text-xl leading-relaxed text-foreground font-medium mb-8">
                Editing is an invisible art. When done perfectly, the audience never notices the cuts—they only feel the emotion.
              </p>

              <p className="mb-6">
                As a DaVinci Resolve specialist and professional video editor, I don't just assemble footage. I construct narratives. Whether it's a high-impact commercial, an atmospheric brand film, or engaging social media content, my approach is rooted in intentionality. Every frame must earn its place.
              </p>

              <p className="mb-6">
                My workflow combines technical rigor with creative intuition. Advanced color grading, intricate sound design, and precise rhythmic cutting aren't just post-production steps—they are the tools I use to breathe life into raw media.
              </p>

              <p>
                I collaborate with agencies, creators, and brands who understand that post-production isn't an afterthought; it's where the story is truly written.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}