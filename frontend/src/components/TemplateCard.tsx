import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import type { Template } from "@/data/templates";

export const TemplateCard = ({ template }: { template: Template }) => (
  <Link
    to={`/templates/${template.id}`}
    className="group rounded-xl border bg-card overflow-hidden transition-all hover:shadow-md hover:border-primary/20"
  >
    <div className={`h-40 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
      <span className="text-white/90 font-semibold text-lg">{template.name}</span>
    </div>
    <div className="p-5">
      <h3 className="font-semibold">{template.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{template.description}</p>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <FileText className="h-3 w-3" />
        <span>{template.pages.length} pages</span>
      </div>
      <div className="mt-3 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        View Details <ArrowRight className="h-3.5 w-3.5 ml-1" />
      </div>
    </div>
  </Link>
);
