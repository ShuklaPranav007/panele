import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ComponentCard } from "@/components/ComponentCard";
import { component, categori } from "@/data/components";

const ComponentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  const filtered =
    activeCategory === "All"
      ? component
      : component.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen flex bg-black text-white flex-col">
      <Navbar />
      <div className="container py-10 mt-10  flex-1">
        <h1 className="text-3xl font-bold mb-2">Components Library</h1>
        <p className="text-muted-foreground mb-8">Browse reusable React components ready to copy into your project.</p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-48 shrink-0">
            <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-3 tracking-wider">Categories</h3>
            <ul className="space-y-1">
              {["All", ...categori].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSearchParams(cat === "All" ? {} : { category: cat })}
                    className={`w-full text-left rounded-md px-3 py-1.5 text-sm transition ${
                      activeCategory === cat
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((c) => (
              <ComponentCard key={c.id} component={c} />
            ))}
            {filtered.length === 0 && (
              <p className="text-muted-foreground text-sm col-span-full">No components in this category yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsPage;
