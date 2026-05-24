import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-3 text-sm">
        <div>
          <div className="font-script text-3xl text-accent">Farhad Nouri</div>
          <p className="mt-4 font-script text-xl text-muted-foreground">Show up. Stay grounded. Do the work.</p>
        </div>
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/training" className="hover:text-accent">Private Training</Link></li>
            <li><Link to="/clinics" className="hover:text-accent">Clinics</Link></li>
            <li><Link to="/speaking" className="hover:text-accent">Speaking</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase tracking-[0.2em] text-xs text-muted-foreground mb-4">Social</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-accent"><Youtube className="h-5 w-5" /></a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Farhad Nouri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
