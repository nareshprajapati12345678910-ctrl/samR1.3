import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2021 — Present",
    role: "Senior Video Editor",
    company: "Freelance",
    description: "Partnering with creative agencies and direct clients to deliver high-end commercial spots, brand films, and documentary shorts. Specializing in DaVinci Resolve workflows."
  },
  {
    year: "2018 — 2021",
    role: "Lead Content Editor",
    company: "Studio Narrative",
    description: "Managed post-production pipeline for a boutique studio. Oversaw editing, color grading, and final delivery for digital campaigns."
  },
  {
    year: "2016 — 2018",
    role: "Junior Editor",
    company: "Cut & Run Media",
    description: "Assisted senior editors, managed media organization, and cut social media adaptations for major broadcast commercials."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Timeline</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Experience.</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-12 group"
            >
              <div className="text-sm font-medium text-muted-foreground pt-1 group-hover:text-foreground transition-colors">
                {exp.year}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="text-secondary-foreground font-medium mb-3">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}