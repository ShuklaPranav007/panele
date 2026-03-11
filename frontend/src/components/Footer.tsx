import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t bg-secondary/30 mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <Code2 className="h-5 w-5 text-primary" />
            UIForge
          </div>
          <p className="text-sm text-muted-foreground">
            Reusable React UI components and templates for developers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/components" className="hover:text-foreground transition">Components</Link></li>
            <li><Link to="/templates" className="hover:text-foreground transition">Templates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition">Documentation</a></li>
            <li><a href="#" className="hover:text-foreground transition">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
            <li><a href="#" className="hover:text-foreground transition">Discord</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        © 2026 UIForge. Built by SOIT Dev
      </div>
    </div>
  </footer>
);
