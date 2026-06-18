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
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-secondary/30 pt-24 pb-12 transition-colors duration-300 dark:bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90 dark:from-transparent dark:to-[#0A0A0A]/90"></div>
        <img
          src="/images/hero-bg.png"
          alt="Professional editing suite"
          className="h-full w-full object-cover object-center opacity-40 mix-blend-multiply dark:opacity-20"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="mb-6 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              I Transform Ideas Into <br className="hidden md:block" />
              <span className="italic text-muted-foreground">Powerful Visual Stories.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-2xl text-lg font-light text-secondary-foreground md:text-xl"
          >
            Professional Video Editor | DaVinci Resolve Specialist | Content Creator
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="group h-14 rounded-none bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollTo('#portfolio')}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-none border-border px-8 text-base font-medium hover:bg-secondary"
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