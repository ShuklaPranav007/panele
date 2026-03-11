import { Link, useLocation } from "react-router-dom";
import { Search, Github, LayoutGrid, FileText, Blocks, ArrowDownToLine } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `flex items-center gap-2 text-sm font-medium transition-all duration-200 ${isActive(path) ? "text-blue-500" : "text-slate-600 hover:text-blue-500"
    }`;

  return (
    // Outer container: centered, floating, and fixed
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="container max-w-6xl pointer-events-auto">
        {/* The "Pill" - Glassmorphism style */}
        <div className="flex h-14 items-center justify-between rounded-xl border border-white/10 bg-black px-6 shadow-lg backdrop-blur-md">

          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <Link to={'/'} className="flex items-center gap-2">
              <img src="/logo.png" alt="Panele" className="h-8 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex text-white items-center gap-8 text-sm">



            <Link

              to="/components"

              className={`${linkClass("/components")} text-gray-100 hover:text-white transition`}

            >
<h2 className="text-gray-200">Components</h2>

            </Link>

            <Link

              to="/pages"

              className={`${linkClass("/pages")} text-gray-100 hover:text-white transition`}
            >
              <h2 className="text-gray-200">Pages</h2>
            </Link>
            <Link
              to="/templates"
              className={`${linkClass("/templates")} text-gray-100 hover:text-white transition`}>
              <h2 className="text-gray-200">Templates</h2>
            </Link>
            <Link
              to="/about"
              className={`${linkClass("/about")} text-gray-100 hover:text-white transition`}>
              <h2 className="text-gray-200">About Us</h2>
            </Link>
          </nav>

          {/* Center Navigation */}
          {/* <div className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">

            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"

              placeholder="Search components..."

              value={searchQuery}

              onChange={(e) => setSearchQuery(e.target.value)}

              className="bg-transparent text-sm text-white outline-none placeholder:text-gray-400 w-44"

            />
          </div> */}
        </div>
      </div>
    </header>
  );
};