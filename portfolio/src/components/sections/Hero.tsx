import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
        <img 
          src="/images/hero-bg.png" 
          alt="Professional editing suite" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              I Transform Ideas Into <br className="hidden md:block" />
              <span className="italic text-muted-foreground">Powerful Visual Stories.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-secondary-foreground mb-10 max-w-2xl font-light"
          >
            Professional Video Editor | DaVinci Resolve Specialist | Content Creator
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-medium group"
              onClick={() => scrollTo('#portfolio')}
            >
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-none h-14 px-8 text-base font-medium border-border hover:bg-secondary"
              onClick={() => scrollTo('#contact')}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}