import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `flex items-center gap-2 text-sm font-medium transition-all duration-200 ${
      isActive(path) ? "text-blue-500" : "text-slate-600 hover:text-blue-500"
    }`;

  const handleLogout = async (): Promise<void> => {
    await logout();
    navigate("/signin");
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="container max-w-6xl pointer-events-auto">
        <div className="flex h-14 items-center justify-between rounded-xl border border-white/10 bg-black px-6 shadow-lg backdrop-blur-md">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Panele" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Nav Links */}
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
              className={`${linkClass("/templates")} text-gray-100 hover:text-white transition`}
            >
              <h2 className="text-gray-200">Templates</h2>
            </Link>

            <Link
              to="/about"
              className={`${linkClass("/about")} text-gray-100 hover:text-white transition`}
            >
              <h2 className="text-gray-200">About Us</h2>
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {user ? (
              <>
                {/* User greeting */}
                <span className="hidden sm:block text-sm text-gray-400">
                  Hi,{" "}
                  <span className="text-white font-medium">{user.name}</span>
                </span>

                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-gray-300 hover:text-red-400 transition-colors duration-200 border border-white/10 hover:border-red-400/30 px-4 py-1.5 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  to="/signin"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sign In
                </Link>

                {/* Sign Up */}
                <Link
                  to="/signup"
                  className="text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};