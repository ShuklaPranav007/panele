import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { components, PageComponent } from "@/data/pages";



export const FeaturedCard = ({ component }) => (
  <Link
    to={`/pages?category=${component.category}`}
    className="group relative block rounded-xl bg-black p-2 overflow-hidden border border-transparent hover:border-blue-600 transition-all"
  >
    {/* Image */}

    <img
      src={component.image}
      alt={component.category}
      className="rounded-lg object-fit w-full h-[180px]"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent  opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between p-4"></div>
         <div className="relative flex items-center justify-between mt-5 " >

      {/* Text */}
      <span className="text-white font-bold text-lg">
        {component.category}
      </span>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
      </div>

    {/* </div> */}
  </Link>
);

export const CompCard = ({ component }) => {
  const category = component.category;

  return (
    <Link 
      to={`/component?category=${category}`}
      className="  flex flex-col relative   rounded-2xl  overflow-hidden group   bg-black p-2   border border-transparent hover:border-blue-600 transition-all    "
    >
      {/* Image Container */}
      <div className="   mt-5   overflow-hidden">
        <img
          src={component.image}
          alt={category}
          className="object-fit rounded-xl transform  "
        />
      </div>

    

      {/* Content Layer */}
       <div className="relative flex items-center justify-between mt-5 " >
      {/* Text */}
      <span className="text-blue-500 font-bold text-lg">
        {component.category}
      </span>

      {/* Arrow */}
      <ArrowRight className="h-4 w-4 text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />

    </div>
    </Link>
  );
};