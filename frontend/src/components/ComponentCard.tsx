import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { UIComponent } from "@/data/components";

export const ComponentCard = ({ component }: { component: UIComponent }) => (
  <div className="group rounded-xl   bg-black  p-5 transition-all hover:border">
  <Link
    to={`/components/${component.id}`}
  >
    
    <div className="flex items-start justify-between">
      <div>
     <img src={component.image} />
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
    </div>
    <span className="mt-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
      {component.category}
    </span>
  </Link>
  </div>
);
