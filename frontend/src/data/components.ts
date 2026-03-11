import Navbar1 from "/assets/Navbar1.png";
import Button1 from "/assets/Button1.png";

export interface UIComponent {
  id: string;
  image: string;
  category: string;
  code: string;
}

export const categori = [
  "Navbar", "Footer", "Button", "Card", "Input", "Toast", "Menu Bar", "Switch"
];

export const component: UIComponent[] = [
   {
    id: "1",
    category: "Navbar",
    image: Navbar1,
    code: `const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-zinc-50 shadow-sm">
      {/* Left Side: Brand Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-xl shadow-md transition-transform group-hover:scale-110">
          {/* Lightning Bolt Icon Placeholder */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white" />
          </svg>
        </div>
        <span className="text-2xl font-black tracking-tighter text-indigo-600">
          clever
        </span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {['Home', 'Product', 'Features', 'Pricing'].map((item) => (
          <a 
            key={item} 
            href={\`#\${item.toLowerCase()}\`} 
            className="text-sm font-semibold text-zinc-600 hover:text-indigo-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Side: Auth Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm font-bold text-zinc-700 hover:text-black transition-colors">
          Sign in
        </button>
        <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all active:scale-95">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
`,
  },
   {
    id: "2",
    category: "Button",
    image: Navbar1,
    code: `const Navbar = () => {
  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex items-center justify-between border-b border-zinc-50 shadow-sm">
      {/* Left Side: Brand Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-2 rounded-xl shadow-md transition-transform group-hover:scale-110">
          {/* Lightning Bolt Icon Placeholder */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="white" />
          </svg>
        </div>
        <span className="text-2xl font-black tracking-tighter text-indigo-600">
          clever
        </span>
      </div>

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex items-center gap-10">
        {['Home', 'Product', 'Features', 'Pricing'].map((item) => (
          <a 
            key={item} 
            href={\`#\${item.toLowerCase()}\`} 
            className="text-sm font-semibold text-zinc-600 hover:text-indigo-600 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Right Side: Auth Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm font-bold text-zinc-700 hover:text-black transition-colors">
          Sign in
        </button>
        <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-indigo-300 transition-all active:scale-95">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
`,
  },
   
 
];


 