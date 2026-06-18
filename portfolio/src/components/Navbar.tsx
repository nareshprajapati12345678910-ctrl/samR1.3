import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Moon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import TeamMembers from "@/components/sections/TeamMembers";

const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Showcase", href: "#showcase" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [modalType, setModalType] = useState<"team" | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    setMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalType ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalType]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#team") {
      setModalType("team");
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeModal = () => setModalType(null);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "border-b border-border bg-background/90 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
          <Link href="/">
            <span className="cursor-pointer font-serif text-2xl font-bold tracking-tight text-foreground">
              samR1
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm font-medium text-secondary-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/80 p-2 text-foreground transition-colors duration-300 hover:bg-secondary lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 border-b border-border bg-background/95 p-6 shadow-lg backdrop-blur-md lg:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-lg font-medium text-foreground transition-colors duration-300 hover:text-muted-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <TeamMembers isOpen={modalType === "team"} onClose={closeModal} />
    </>
  );
}