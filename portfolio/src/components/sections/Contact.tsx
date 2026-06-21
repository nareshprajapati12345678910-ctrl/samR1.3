import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS - replace with your actual Public Key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY_HERE");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      project_type: formData.get("project"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID_HERE",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID_HERE",
        templateParams
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast({
            title: "Inquiry Sent",
            description: "Thank you for reaching out. I'll get back to you shortly.",
          });
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          setIsSubmitting(false);
          toast({
            title: "Error",
            description: "Failed to send your inquiry. Please try again or contact directly.",
            variant: "destructive",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="bg-background py-24 transition-colors duration-300 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">Inquiries</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Let's build<br />something.</h2>
            <p className="text-lg text-secondary-foreground font-light mb-12 max-w-md">
              Available for freelance editing, color grading, and post-production consulting. Let's discuss your next project.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:samr1films@gmail.com"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors"
                >
                  <Mail size={18} />
                </motion.div>
                <span className="text-lg font-medium">samr1films@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/samr1.films"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors"
                >
                  <FaInstagram size={18} />
                </motion.div>
                <span className="text-lg font-medium">@samr1.films</span>
              </motion.a>
              <motion.a
                href="https://wa.me/919511209061"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors"
                >
                  <MessageCircle size={18} />
                </motion.div>
                <span className="text-lg font-medium">WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-card p-8 md:p-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" name="name" required className="h-12 rounded-none border-border bg-background" placeholder="Jane Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" name="email" type="email" required className="h-12 rounded-none border-border bg-background" placeholder="jane@example.com" />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  className="flex h-12 w-full rounded-none border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="" disabled>Select an option</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Brand">Brand Film</option>
                  <option value="Social">Social Media</option>
                  <option value="Cinematic">Cinematic Short</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-[120px] resize-none rounded-none border-border bg-background"
                  placeholder="Tell me about your project, timeline, and goals..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 h-14 text-base font-medium group"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}