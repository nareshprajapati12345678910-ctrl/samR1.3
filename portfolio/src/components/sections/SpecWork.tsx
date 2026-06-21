import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const specs = [
  { id: 1, title: "Horology", category: "Brand Concepts", type: "Concept" },
  { id: 3, title: "Solitude", category: "Color Grading", type: "Study" },
  { id: 4, title: "Velocity", category: "Brand Concepts", type: "Concept" },
];

const filters = ["All", "Brand Concepts", "Color Grading"];

export default function SpecWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSpecs = specs.filter(spec => activeFilter === "All" || spec.category === activeFilter);

  return (
    <section id="spec-work" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Independent</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Spec & Concepts.</h2>

          <div className="flex flex-wrap gap-4">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`btn-animate text-sm font-medium px-4 py-2 border transition-all duration-300 ${activeFilter === filter
                  ? "bg-foreground text-background border-foreground shadow-[0_10px_28px_-14px_hsl(var(--foreground)/0.45)]"
                  : "bg-transparent text-secondary-foreground border-border hover:border-foreground/30 hover:bg-secondary/50"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSpecs.map(spec => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={spec.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-secondary border border-border flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-center relative z-10">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground mb-2 block">
                      {spec.type}
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-1">{spec.title}</h3>
                    <p className="text-xs text-secondary-foreground">{spec.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}