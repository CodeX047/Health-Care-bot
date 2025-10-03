import React, { useState } from "react";
import { Heart, Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setEmail(""), 1500);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-primary rounded-full p-2 animate-pulse-fast">
              <Heart className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-foreground font-semibold">
                Rural Healthcare AI Bot
              </span>
              <div className="text-sm text-muted-foreground">
                Empowering rural communities
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <a
              href="https://github.com/CodeX047/Health-Care-bot"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-muted/20"
            >
              <Github className="w-4 h-4 text-foreground" />
            </a>
            <a href="#contact" className="p-2 rounded-md hover:bg-muted/20">
              <Mail className="w-4 h-4 text-foreground" />
            </a>
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="p-2 rounded-md hover:bg-muted/20"
            >
              <ArrowUp className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rural Healthcare AI Bot — Made with{" "}
          <span className="inline-block align-middle text-destructive">❤</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
