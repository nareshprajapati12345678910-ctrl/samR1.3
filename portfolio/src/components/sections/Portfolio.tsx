import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Midnight Drive",
    category: "Commercial",
    description: "Automotive launch spot featuring dynamic pacing and moody, high-contrast color grading.",
    image: "/images/portfolio-1.png",
  },
  {
    id: 2,
    title: "Echoes of Silence",
    category: "Cinematic",
    description: "A short narrative film focusing on atmospheric sound design and subtle editorial rhythm.",
    image: "/images/portfolio-2.png",
  },
  {
    id: 3,
    title: "Obsidian",
    category: "Brand Film",
    description: "Minimalist product showcase emphasizing texture and premium monochromatic aesthetics.",
    image: "/images/portfolio-4.png",
  },
  {
    id: 4,
    title: "Fluid Forms",
    category: "Motion Design",
    description: "Abstract visual exploration combining 3D elements with rhythmic editorial structures.",
    image: "/images/portfolio-5.png",
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Selected Work</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Featured Projects.</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 aspect-video overflow-hidden bg-secondary/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-foreground font-light text-sm max-w-md">
                    {project.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}