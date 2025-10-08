import { Github, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <img src="/image/logo.png" alt="Health Care Bot" width={170} />
          </div>

          <div className="flex items-center space-x-4 justify-end">
            <a
              href="https://github.com/CodeX047/Health-Care-bot"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-muted/20"
            >
              <Github className="w-4 h-4 text-foreground" />
            </a>
            <a
              href={"mailto:vishal.patil@adypu.edu.in"}
              className="p-2 rounded-md hover:bg-muted/20"
            >
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
          © {new Date().getFullYear()} Rural Healthcare AI Bot
        </div>
      </div>
    </footer>
  );
};

export default Footer;
