import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroes } from "@/data/herodata";

const pageSections = [
  {
    title: "Login Pages",
    pages: [
      { name: "Login UI 1", img: "/assets/login1.png", link: "/login/1" },
      { name: "Login UI 2", img: "/assets/login2.png", link: "/login/2" },
      { name: "Login UI 3", img: "/assets/login3.png", link: "/login/3" },
      { name: "Login UI 4", img: "/assets/login4.png", link: "/login/4" },
    ],
  },
  {
    title: "Pricing Pages",
    pages: [
      { name: "Pricing UI 1", img: "/assets/pricing1.png", link: "/pricing/1" },
      { name: "Pricing UI 2", img: "/assets/pricing2.png", link: "/pricing/2" },
      { name: "Pricing UI 3", img: "/assets/pricing3.png", link: "/pricing/3" },
    ],
  },
];

const Mypages = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">

        {/* HERO SECTION (Mapped from data) */}
        <div className="mb-24">

          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Hero Pages</h2>

            <Link
              to="/hero"
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {heroes.map((hero) => (
              <Link
                key={hero.id}
                to={`/hero/${hero.id}`}
                className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
              >

                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={hero.image}
                    // alt={hero.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Footer */}
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-sm font-medium">
                    {/* {hero.title} */}
                  </h3>

                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition" />
                </div>

              </Link>
            ))}

          </div>
        </div>


        {/* OTHER PAGE SECTIONS */}
        {pageSections.map((section, i) => (
          <div key={i} className="mb-24">

            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {section.title}
              </h2>

              <Link
                to="#"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {section.pages.map((page, index) => (
                <Link
                  key={index}
                  to={page.link}
                  className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
                >

                  <div className="h-44 overflow-hidden">
                    <img
                      src={page.img}
                      alt={page.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 flex items-center justify-between">
                    <h3 className="text-sm font-medium">
                      {page.name}
                    </h3>

                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition" />
                  </div>

                </Link>
              ))}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Mypages;