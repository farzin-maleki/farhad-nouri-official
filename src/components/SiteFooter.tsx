import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display text-2xl tracking-widest text-gradient-gold">FARHAD.NOURI</div>
          <p className="mt-4 text-muted-foreground">Wrestler. Fitness Athlete. Champion mindset.</p>
        </div>
        <div>
          <h4 className="uppercase tracking-[0.25em] text-xs text-accent mb-4 font-display">Explore</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/life-story" className="hover:text-accent">Life Story</Link></li>
            <li><Link to="/achievements" className="hover:text-accent">Achievements</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/videos" className="hover:text-accent">Videos</Link></li>
            <li><Link to="/book" className="hover:text-accent">Book a Session</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-[0.25em] text-xs text-accent mb-4 font-display">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/farhad.nourri" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="mailto:farhadnourilo74@gmail.com" aria-label="Email" className="hover:text-accent transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Farhad Nouri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
