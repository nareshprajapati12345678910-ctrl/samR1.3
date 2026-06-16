import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "DaVinci Resolve", category: "Primary Tool", description: "Expert-level proficiency in editing, Fusion, Fairlight, and Deliver pages." },
  { name: "Color Grading", category: "Specialty", description: "Node-based grading, color space transforms, and cinematic look development." },
  { name: "Narrative Pacing", category: "Craft", description: "Rhythmic cutting, tension building, and structural storytelling." },
  { name: "Sound Design", category: "Craft", description: "Audio mixing, Foley integration, and sonic environment building." },
  { name: "Motion Graphics", category: "Technical", description: "2D compositing, typography animation, and visual effects in Fusion." },
  { name: "Workflow Optimization", category: "Technical", description: "Proxy generation, efficient media management, and mastering." },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">The Toolkit.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-border group hover:border-foreground/20 transition-colors"
            >
              <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-4">
                {skill.category}
              </div>
              <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}