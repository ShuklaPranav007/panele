import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageComponent } from "@/data/pages";

export const PageCard = ({ component }: { component: PageComponent }) => (
  <Link
    to={`/pages/${component.id}`}
    className="group relative block rounded-xl bg-black p-2 overflow-hidden border border-transparent hover:border-blue-600 transition-all"
  >
    {/* Image */}
    <img
      src={component.image}
      alt={component.category}
      className="rounded-lg object-fit w-full h-[180px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-4">
      
      {/* Text */}
      <span className="text-blue-500 font-bold text-sm">
        Get Code
      </span>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />

    </div>
  </Link>
);