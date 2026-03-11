import hero1 from "/assets/hero1.png";
import hero2 from "/assets/hero2.png";
import hero3 from "/assets/hero3.png";
import hero4 from "/assets/hero4.png";
import hero5 from "/assets/hero5.png";
import hero6 from "/assets/hero6.png";
import hero7 from "/assets/hero7.png";
import hero8 from "/assets/hero8.png";
import hero9 from "/assets/hero9.png";
import hero10 from "/assets/hero10.png";


export const heroes = [
  {
    id: "1",
    image: hero1,
    code: `const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-zinc-100 font-sans selection:bg-yellow-200">
      
      {/* 1. Yellow Navigation Bar */}
      <nav className="relative z-30 flex w-full items-stretch border-b border-zinc-800/10 bg-[#E9E97E]">
        <div className="flex items-center gap-2 px-8 py-5 font-bold text-zinc-900 border-r border-zinc-800/20">
          <div className="flex flex-col leading-none">
            <span className="text-xl tracking-tighter uppercase italic">Aria Blake</span>
          </div>
        </div>
        
        <div className="flex flex-1 items-center justify-center gap-12 text-sm font-medium lowercase">
          <a href="#" className="hover:opacity-60 transition-opacity">listings</a>
          <a href="#" className="hover:opacity-60 transition-opacity">about</a>
          <a href="#" className="hover:opacity-60 transition-opacity">services</a>
        </div>

        <div className="flex items-center px-8 border-l border-zinc-800/20">
          <button className="text-sm font-medium hover:underline">
            Get a Free Consultation
          </button>
        </div>
      </nav>

      {/* 2. Main Hero Section */}
      <div className="relative h-[calc(100vh-68px)] w-full">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000')" 
          }}
        >
          {/* Subtle dark gradient for text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* 3. Content Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          
          {/* Main Headline Group */}
          <div className="max-w-4xl pt-10">
            <h1 className="text-[140px] font-serif font-medium leading-[0.85] tracking-tight text-[#E9E97E]">
              Stop Searching.<br />
              Start Living.
            </h1>
            
            <div className="mt-16 max-w-xs">
              <p className="text-lg font-medium leading-tight text-[#E9E97E] drop-shadow-sm">
                Your Direct Path To The Home<br />You Deserve
              </p>
              <button className="mt-6 bg-[#E9E97E] px-8 py-3 text-sm font-bold uppercase tracking-wider text-zinc-900 hover:bg-white transition-colors">
                Contact Now
              </button>
            </div>
          </div>

          {/* 4. Bottom Right Listing Card & Sold Badge */}
          <div className="absolute bottom-16 right-16 flex items-end">
            
            {/* The Overlapping Sold Badge */}
            <div className="z-20 -mr-10 -mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#E9E97E] shadow-xl border-4 border-white/20 rotate-12">
              <span className="font-black uppercase tracking-tighter text-zinc-800 text-xl">Sold</span>
            </div>

            {/* The Listing Info Card */}
            <div className="flex w-[480px] bg-white p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400" 
                alt="House" 
                className="h-36 w-36 object-cover"
              />
              <div className="flex flex-1 flex-col justify-between pl-5 py-1">
                <h3 className="text-xl font-bold leading-tight text-zinc-800">
                  Charming Family Ranch in Greenfield Estates
                </h3>
                <div className="flex justify-between border-t border-zinc-100 pt-3 text-[13px] font-semibold text-zinc-400 uppercase tracking-widest">
                  <span>3 Bed</span>
                  <span>2 Bath</span>
                  <span>167 Sqm</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
`,
  },
  {
    id: "3",
    image: hero2,
    code: `import { HeartOff } from 'lucide-react';
    import React from 'react';
    
    const Hero = () => {
      return (
        <div className="min-h-screen w-full bg-[#E5E2D9] font-serif text-zinc-800">
          {/* 1. Top Navigation */}
          <nav className="absolute top-0 right-0 z-20 flex gap-8 p-10 text-sm font-medium">
            <a href="#" className="hover:opacity-60 transition-opacity">Recipes</a>
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="hover:opacity-60 transition-opacity underline underline-offset-4">Join the Blog</a>
          </nav>
    
          <main className="flex min-h-screen flex-col md:flex-row">
            
            {/* LEFT COLUMN: Content */}
            <div className="relative flex flex-1 flex-col justify-between p-12 md:p-20">
              {/* Logo Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xl font-medium italic">The Sear</span>
                <div className="h-12 w-12 rounded-full border-2 border-zinc-800 flex items-center justify-center">
                   {/* Simplified SVG Logo */}
                   <div className="grid grid-cols-2 gap-0.5 rotate-45">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="h-2 w-2 rounded-full bg-zinc-800" />
                     ))}
                   </div>
                </div>
              </div>
    
              {/* Main Headline */}
              <div className="my-12">
                <h1 className="text-7xl md:text-8xl lg:text-[120px] leading-[0.9] tracking-tight">
                  Recipes<br />
                  That Actually<br />
                  Work
                </h1>
              </div>
    
              {/* Bio / Description */}
              <div className="max-w-md">
                <p className="text-sm leading-relaxed font-sans text-zinc-700">
                  Hi, I'm Elena. I'm a home cook, recipe developer, and the voice behind The Sear. 
                  I've been cooking since I could reach the stove, and I've never stopped. 
                  Every recipe here has been tested multiple times in my home kitchen before it makes it to the site.
                </p>
              </div>
            </div>
    
            {/* RIGHT COLUMN: Image & Featured Card */}
            <div className="relative flex-1">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" 
                alt="Elena cooking in kitchen" 
                className="h-full w-full object-cover grayscale-[10%]"
              />
    
              {/* Featured Recipe Card Overlay */}
              <div className="absolute bottom-10 right-10 z-10 w-72 bg-[#F7F6F2] p-6 shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-zinc-800" />
                  <span className="text-[10px] font-bold uppercase tracking-widest font-sans">New This Week</span>
                </div>
                
                <h3 className="mb-4 text-xl font-medium leading-tight">
                  Braised Short Ribs with Creamy Polenta
                </h3>
    
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white mb-4">
                   <img 
                     src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400" 
                     alt="Short Ribs" 
                     className="h-full w-full object-cover"
                   />
                </div>
    
                <button className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-sans">
                  <span>View Recipe</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
    
          </main>
        </div>
      );
    };
    
    export default Hero;`,
  },
  {
    id: "2",
    image: hero3,
    code: `import React from 'react';
import { ShoppingBag, User, Menu, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white font-sans text-zinc-900">
    
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
        <div className="flex items-center gap-6">
          <span className="text-xl font-medium tracking-tighter">(A)</span>
          <button className="rounded-full border border-zinc-300 px-6 py-1.5 text-xs font-medium uppercase tracking-widest hover:bg-zinc-50 transition-colors">
            Book Now
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          <ShoppingBag size={20} strokeWidth={1.5} className="cursor-pointer" />
          <User size={20} strokeWidth={1.5} className="cursor-pointer" />
          <Menu size={20} strokeWidth={1.5} className="cursor-pointer" />
        </div>
      </nav>
 
      <main className="relative h-[calc(100vh-68px)] w-full overflow-hidden">
        
     
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale-[20%]"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=2000')" 
          }}
        />

       
        <div className="relative grid h-full w-full grid-cols-4 grid-rows-3 border-zinc-200/30 [&>div]:border-r [&>div]:border-b [&>div]:border-white/20">
          
        
          <div className="border-l border-white/20"></div>
          <div></div>
          <div></div>
          <div className="border-r-0"></div>

         
          <div className="col-span-1 bg-white flex flex-col justify-center px-10 border-l">
            <h1 className="text-7xl font-light leading-[0.9] tracking-tight text-zinc-800">
              Allemande<br />Clinic
            </h1>
            <p className="mt-4 text-xs font-medium text-zinc-500 uppercase tracking-widest">
              Advanced Aesthetics, Naturally You
            </p>
          </div>
          <div></div>
          <div></div>
          <div className="border-r-0"></div>

      
          <div className="border-l border-white/20"></div>
          <div></div>
          <div className="bg-white p-8 flex flex-col justify-end">
             <div className="flex justify-between items-end group cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-widest leading-tight">
                  Explore<br />Treatments
                </span>
                <ArrowUpRight size={48} strokeWidth={1} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
          </div>
          <div className="border-r-0"></div>

        </div>
      </main>
    </div>
  );
};

export default Hero;`,
  },
  {
    id: "4",
    image: hero4,
    code: `const RenovationHero = () => {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900 font-sans text-white overflow-hidden">
      
      {/* 1. Subtle Dark Navigation */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-10 py-6 bg-gradient-to-b from-black/40 to-transparent">
        <div className="text-xl font-bold tracking-tight">Real&Done</div>
        <div className="flex gap-10 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-orange-200 transition-colors">About</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Work</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Services</a>
          <a href="#" className="hover:text-orange-200 transition-colors">Contact</a>
        </div>
      </nav>

      {/* 2. Full Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1676823547752-1d24e8597047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" 
          alt="Modern renovated interior" 
          className="h-full w-full object-cover opacity-80"
        />
        {/* Darkening overlay for text legibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-10 flex h-screen w-full flex-col justify-center px-10 lg:px-20">
        
        <div className="max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-[12vw] font-bold leading-[0.85] tracking-tighter mb-6">
            Real&Done
          </h1>
          <p className="text-2xl md:text-4xl font-semibold max-w-xl leading-snug text-white/90">
            Exceptional Home Remodeling & Renovations
          </p>
        </div>

        {/* 4. Floating 'Get a Quote' Form */}
        <div className="absolute bottom-10 right-10 lg:right-20 w-full max-w-md bg-white p-10 rounded-sm shadow-2xl text-zinc-900">
          <h2 className="text-3xl font-serif italic mb-8 text-zinc-800">Get a Quote</h2>
          
          <form className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">First Name*</label>
              <input type="text" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Last Name*</label>
              <input type="text" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Email*</label>
              <input type="email" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Phone Number</label>
              <input type="tel" className="bg-transparent outline-none text-sm" />
            </div>
            <div className="col-span-2 flex flex-col border-b border-zinc-300 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Message</label>
              <textarea className="bg-transparent outline-none text-sm resize-none h-12"></textarea>
            </div>
          </form>
        </div>

        {/* 5. Review Badge (Bottom Left) */}
        <div className="absolute bottom-10 left-10 lg:left-20 bg-[#FDF2E3] p-4 rounded-md shadow-lg text-zinc-900">
          <div className="flex text-zinc-800 mb-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xs">★</span>
            ))}
            <span className="ml-2 text-[10px] font-bold">(4.9)</span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">
            Based on 3,538 Reviews
          </p>
        </div>

      </div>
    </div>
  );
};

export default RenovationHero;`,
  },
  {
    id: "5",
    image: hero5,
    code: `const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-black font-sans text-white overflow-hidden">
      
      {/* 1. Transparent Navigation */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-10 py-8">
        <div className="text-xl font-bold tracking-tight">Tri.wi</div>
        <div className="flex items-center gap-10 text-sm font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">Products</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Company</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Careers</a>
          <button className="border border-white/30 px-5 py-2 rounded-md hover:bg-white hover:text-black transition-all">
            Pre-Order Now
          </button>
        </div>
      </nav>

      {/* 2. Background Image with Focal Point */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000" 
          alt="Security technology user" 
          className="h-full w-full object-cover opacity-60 object-right md:object-center"
        />
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* 3. Main Content Content */}
      <div className="relative z-10 flex h-screen w-full flex-col justify-center px-10 lg:px-24">
        
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-8">
            Finally, Security<br />
            You Can Hold and Trust
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-10">
            Tri.wi moves protection from the abstract cloud to your hand, 
            offering tangible peace of mind in a digital world.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Pre-Order Now
            </button>
            <button className="border border-white/40 bg-white/5 backdrop-blur-md px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
              The Technology
            </button>
          </div>
        </div>

        {/* 4. Bottom Logo Bar (Social Proof) */}
        <div className="absolute bottom-12 left-10 lg:left-24 right-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-6">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
               Acknowledged by industry leaders
             </span>
             <div className="flex items-center gap-12 grayscale opacity-60">
                {/* Mockup SVG Logos */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border-2 border-white rounded-sm flex items-center justify-center font-bold italic">G</div>
                  <span className="text-sm font-bold tracking-tighter">CyberAI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 border-2 border-dashed border-white rounded-full"></div>
                  <span className="text-sm font-bold tracking-tighter">GBS Finance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white"></div>
                  <span className="text-sm font-bold tracking-tighter">LION BIO BANK</span>
                </div>
                <div className="border-2 border-white px-3 py-1 text-xs font-black tracking-widest">R C R</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;`,
  },
  {
    id: "6",
    image: hero6,
    code: `import { Instagram, Youtube, Facebook } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#EFECE7] font-serif text-[#2D231E]">
      
      {/* 1. Sophisticated Navigation Bar */}
      <nav className="absolute top-0 w-full z-30 flex justify-between items-center px-12 py-6 border-b border-black/5">
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-sans font-medium">
          <a href="#" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#" className="hover:opacity-50 transition-opacity">The Building</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Location</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Amenities</a>
        </div>
        
        <div className="text-xl font-semibold tracking-tighter">LP/52</div>
        
        <div className="flex items-center gap-6">
          <button className="border border-[#2D231E] px-8 py-2 text-[10px] uppercase tracking-widest hover:bg-[#2D231E] hover:text-white transition-all">
            Inquire
          </button>
          <div className="flex gap-3 scale-75 opacity-80">
            <Instagram size={20} />
            <Youtube size={20} />
            <Facebook size={20} />
          </div>
        </div>
      </nav>

      {/* 2. Content & Image Wrapper */}
      <main className="relative flex h-screen w-full flex-col md:flex-row pt-20">
        
        {/* Left Side: Editorial Content */}
        <div className="flex flex-1 flex-col justify-center px-12 lg:px-24">
          <div className="max-w-md">
            <p className="italic text-2xl mb-4 text-[#2D231E]/80">Meet me at</p>
            <h1 className="text-[100px] font-bold leading-none tracking-tight uppercase mb-6">
              La Perla
            </h1>
            <p className="text-3xl italic mb-20 opacity-90">52 Brook St.</p>
            
            <div className="max-w-[280px]">
              <p className="text-sm leading-relaxed font-sans mb-8 opacity-70">
                Introducing a new living experience at the best location in town.
              </p>
              <button className="bg-[#2D231E] text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                See Video
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Architectural Visual */}
        <div className="relative flex-[1.5] h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600" 
            alt="La Perla Architectural Terrace" 
            className="h-full w-full object-cover"
          />
          {/* Subtle overlay to soften the image and match the cream background */}
          <div className="absolute inset-0 bg-[#EFECE7]/10 pointer-events-none"></div>
        </div>

      </main>

      {/* 3. Decorative Bottom Text (Subtle) */}
      <div className="absolute bottom-8 left-12">
         <span className="text-[10px] uppercase tracking-[0.4em] opacity-30">Luxury Living • 2024</span>
      </div>
    </div>
  );
};

export default Hero;`,
  }, {
    id: "7",
    image: hero7,
    code: `import React from 'react';

const ComingSoonPage = () => {
  return (
    // The main container uses a background image. Replace the URL with your specific rock/cave asset.
    <div 
      className="relative min-h-screen w-full flex flex-col justify-between font-sans text-white bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=2000&auto=format&fit=crop')",
        // Adding a subtle overlay to ensure text remains readable against various backgrounds
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)" 
      }}
    >
      {/* Header */}
      <header className="px-8 py-6">
        <a href="#" className="text-sm tracking-widest hover:opacity-70 transition-opacity uppercase font-medium">
          Home
        </a>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 w-full">
        {/* Title */}
        <h1 className="text-6xl md:text-[8rem] leading-none font-light tracking-tight text-center mb-16 md:mb-24 drop-shadow-lg">
          COMING <br /> SOON
        </h1>

        {/* Subscription Form Area */}
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-sm md:text-base tracking-[0.3em] uppercase mb-8 font-medium drop-shadow-md">
            Be First In Line
          </h2>

          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            {/* Email Input */}
            <div className="w-full mb-6">
              <label htmlFor="email" className="block text-xs mb-2 opacity-90 pl-1">
                Email *
              </label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-transparent border-b border-white/60 py-2 pl-1 text-white focus:outline-none focus:border-white focus:ring-0 transition-colors placeholder-white/30"
              />
            </div>

            {/* Checkbox and Submit Button */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 mt-2">
              <label className="flex items-center gap-3 text-xs md:text-sm cursor-pointer group opacity-90 hover:opacity-100 transition-opacity">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 bg-transparent border border-white rounded-sm checked:bg-white checked:text-black focus:ring-0 focus:ring-offset-0 cursor-pointer appearance-none relative before:content-['✓'] before:absolute before:text-black before:opacity-0 checked:before:opacity-100 before:left-[2px] before:-top-[2px] before:text-sm" 
                  required
                />
                <span>Yes, Subscribe Me To Your Newsletter.</span>
              </label>

              <button 
                type="submit"
                className="bg-white text-black px-8 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors w-full sm:w-auto"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-[#a0a0a0] py-4 px-6 md:px-12 text-[10px] md:text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex gap-2">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
        </div>
        
        <div className="flex gap-2 justify-center flex-wrap">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>

        <div>
          © 2035 By Nowaday. Powered And Secured By Wix
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;`,
  },
  {
    id: "8",
    image: hero8,
    code: `import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-[#f4eedb] overflow-hidden flex flex-col font-sans">
      
      {/* Background Cinematic Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ 
          // A placeholder image of a camera operator/silhouette to match the cinematic vibe
          backgroundImage: "url('https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2000&auto=format&fit=crop')",
        }}
      ></div>

      {/* Gradient overlays for readability and mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col h-screen p-6 md:p-10">
        
        {/* Navigation */}
        <header className="flex justify-between items-center text-xs md:text-sm font-semibold tracking-widest uppercase">
          <div className="flex items-center gap-3">
            {/* Sun/Starburst Icon */}
            <svg 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path d="M12 2L13.5 9L20.5 7L16 12.5L20.5 18L13.5 16L12 23L10.5 16L3.5 18L8 12.5L3.5 7L10.5 9L12 2Z" />
            </svg>
            <span>Production House</span>
          </div>
          
          <nav className="flex gap-6 md:gap-10">
            <a href="#" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Contact</a>
          </nav>
        </header>

        {/* Massive Title */}
        <div className="w-full flex justify-center mt-6 md:mt-2">
          {/* Using inline styles for specific condensed font-family to mimic the image */}
          <h1 
            className="text-[14vw] leading-[0.85] tracking-tight text-center w-full"
            style={{ 
              fontFamily: '"Bebas Neue", "Anton", "Impact", sans-serif',
              transform: 'scaleY(1.1)' // Slight vertical stretch to match the reference
            }}
          >
            CREATIVE FILMMAKING
          </h1>
        </div>

        {/* Spacer to push content to the bottom */}
        <div className="flex-grow"></div>

        {/* Bottom Right Information Box */}
        <div className="self-end w-full max-w-sm md:max-w-md pb-4 md:pb-8 pr-2">
          <p className="text-sm md:text-base font-medium leading-relaxed mb-6 opacity-95">
            We specialize in pre- and post-production services, ensuring your films and commercials stand out with exceptional quality and creativity.
          </p>
          
          <button className="w-full md:w-auto border border-[#f4eedb] text-[#f4eedb] px-10 py-3.5 text-sm tracking-widest hover:bg-[#f4eedb] hover:text-[#0a0a0a] transition-all duration-300 backdrop-blur-sm bg-black/10">
            Explore Services
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;`,
  },
  {
    id: "9",
    image: hero9,
    code: `const Hero = () => {
  return (
    // Main container with dark background and slight padding to frame the inner image
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans flex flex-col px-4 pb-4 pt-2">

      {/* Header / Navbar */}
      <header className="flex justify-between items-center px-4 py-4 text-xs tracking-wide">
        <div className="font-medium tracking-widest">
          A. Roberts
        </div>
        
        <nav className="hidden md:flex gap-10 opacity-80">
          <a href="#" className="hover:text-[#f7e8a4] transition-colors">Shop All</a>
          <a href="#" className="hover:text-[#f7e8a4] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#f7e8a4] transition-colors">Contact Us</a>
        </nav>

        <div className="flex gap-6 items-center opacity-80">
          <a href="#" className="hover:text-[#f7e8a4] transition-colors">Log In</a>
          {/* Shopping Cart SVG Icon */}
          <button className="hover:text-[#f7e8a4] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Massive Main Title */}
      <div className="w-full text-center py-2 md:py-6">
        <h1 
          className="text-[13vw] md:text-[9rem] leading-none text-[#f7e8a4] tracking-tight uppercase"
          style={{ fontFamily: '"Playfair Display", "Times New Roman", serif' }}
        >
          Grooming Mastery
        </h1>
      </div>

      {/* Hero Image Section */}
      <div className="relative flex-grow w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden mt-4">
        {/* Unsplash Placeholder Image */}
        <img 
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop" 
          alt="Barber grooming a client with clippers" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark gradient overlay to make the bottom-left text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        {/* Overlay Content Box (Bottom Left) */}
        <div className="absolute bottom-8 left-6 md:bottom-16 md:left-12 max-w-sm text-white z-10 pr-4">
          <h3 className="text-[10px] md:text-xs font-medium mb-3 tracking-widest uppercase opacity-90">
            Grooming Mastery
          </h3>
          <p className="text-sm md:text-base leading-relaxed mb-6 font-light text-gray-200">
            Explore our curated selection of clippers, trimmers, and grooming essentials. Elevate your grooming routine with our premium tools and accessories.
          </p>
          <button className="bg-[#f7e8a4] text-black px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;`,
  },
  {
    id: "10",
    image: hero10,
    code: `import React from 'react';
    
    const Hero = () => {
      // Sample product data to map through for the collection grid
      const products = [
        { id: 1, name: "Purple Swirl Cap", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80" },
        { id: 2, name: "Maroon Leaf Cap", image: "https://images.unsplash.com/photo-1556306535-0f09a536f01f?auto=format&fit=crop&w=500&q=80" },
        { id: 3, name: "Black Pattern Cap", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=500&q=80" },
        { id: 4, name: "Teal Leaf Cap", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80" }
      ];
    
      return (
        <div className="min-h-screen bg-white font-sans text-[#111]">
          
          {/* Top Promotional Bar */}
          <div className="w-full bg-[#1a1a1a] text-white text-center py-1.5 md:py-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
            Free Shipping Worldwide
          </div>
    
          {/* Navigation Header */}
          <header className="flex justify-between items-center px-4 md:px-8 py-4 bg-white">
            
            {/* Logo */}
            <div className="flex flex-col cursor-pointer">
              <div className="flex items-start">
                <span className="text-3xl font-black tracking-tighter leading-none" style={{ fontFamily: '"Impact", "Arial Black", sans-serif' }}>RAW</span>
                <span className="text-[10px] font-bold mt-1 ml-0.5 tracking-tighter">ETC</span>
              </div>
              {/* Subtle underline for the RAW text as seen in reference */}
              <div className="w-10 h-1 bg-black mt-1"></div>
            </div>
    
            {/* Right Navigation Elements */}
            <div className="flex items-center gap-4 md:gap-6">
              
              {/* Search Bar (Hidden on mobile) */}
              <div className="hidden md:flex items-center gap-2 text-gray-400 text-xs font-semibold cursor-text">
                <span>Search...</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
    
              {/* Cart */}
              <div className="hidden md:block text-xs font-bold cursor-pointer">
                CART (0)
              </div>
    
              {/* Icons Array */}
              <div className="flex items-center gap-3 md:gap-4">
                {/* Notification Bell */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 cursor-pointer">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
                
                {/* User Profile / Dropdown */}
                <div className="flex items-center gap-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
    
                {/* Hamburger Menu */}
                <div className="flex flex-col gap-[4px] cursor-pointer ml-2">
                  <span className="w-6 h-[2px] bg-black"></span>
                  <span className="w-6 h-[2px] bg-black"></span>
                  <span className="w-6 h-[2px] bg-black"></span>
                </div>
              </div>
            </div>
          </header>
    
          {/* Hero Section */}
          <main className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
            {/* Hero Background Image */}
            <img 
              src="https://plus.unsplash.com/premium_photo-1759685060765-2ef6291ff9ef?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Streetwear model with cap" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 
                className="text-white text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-none tracking-tight drop-shadow-lg"
                style={{ fontFamily: '"Impact", "Oswald", "Arial Black", sans-serif' }}
              >
                Always Be <br /> Original
              </h1>
              
              <p className="text-white text-xs md:text-sm font-bold tracking-[0.25em] uppercase mt-4 mb-8 drop-shadow-md">
                New Arrivals Are Here
              </p>
              
              {/* Ghost Button */}
              <button className="border border-white text-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-black/10">
                Shop Now
              </button>
            </div>
          </main>
    
          {/* Limited Edition Collection Section */}
          <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 
              className="text-center text-lg md:text-2xl font-black uppercase tracking-[0.15em] mb-12"
              style={{ fontFamily: '"Impact", "Oswald", sans-serif' }}
            >
              Limited Edition Collection
            </h2>
    
            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer flex flex-col items-center">
                  {/* Image Container with subtle hover scale */}
                  <div className="w-full aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4 mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
    
        </div>
      );
    };
    
    export default Hero;`,
  },
  // {
  //   id: 10,
  //   image: "/assets/hero10.png",
  //   code: `import React from 'react';
    
  //   const Hero = () => {
  //     return (
  //       <div className="min-h-screen bg-white font-sans text-[#333]">
          
  //         {/* Header Section */}
  //         <header className="px-6 py-6 md:px-12 md:py-8 max-w-[1600px] mx-auto">
            
  //           {/* Top Row: Search, Logo, User/Cart Actions */}
  //           <div className="flex justify-between items-center mb-8">
              
  //             {/* Left: Search */}
  //             <div className="hidden md:flex flex-1 items-center">
  //               <div className="flex items-center border-b border-[#c46949] pb-1 w-48">
  //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-500 mr-2">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  //                 </svg>
  //                 <input 
  //                   type="text" 
  //                   placeholder="Search..." 
  //                   className="bg-transparent border-none outline-none text-xs w-full text-gray-700 placeholder-gray-400"
  //                 />
  //               </div>
  //             </div>
    
  //             {/* Center: Logo */}
  //             <div className="flex-1 text-center">
  //               <h1 
  //                 className="text-4xl text-[#c46949] tracking-tight"
  //                 style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontStyle: 'italic' }}
  //               >
  //                 adalene.
  //               </h1>
  //             </div>
    
  //             {/* Right: Socials, Login, Cart */}
  //             <div className="flex flex-1 justify-end items-center gap-4 md:gap-6 text-xs font-medium">
                
  //               {/* Social Icons (Hidden on small mobile) */}
  //               <div className="hidden lg:flex items-center gap-3 text-gray-800">
  //                 {/* Facebook */}
  //                 <svg className="w-4 h-4 cursor-pointer hover:text-[#c46949] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
  //                 {/* Instagram */}
  //                 <svg className="w-4 h-4 cursor-pointer hover:text-[#c46949] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  //                 {/* Twitter/X */}
  //                 <svg className="w-4 h-4 cursor-pointer hover:text-[#c46949] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
  //               </div>
    
  //               <div className="flex items-center gap-2 cursor-pointer hover:text-[#c46949] transition-colors">
  //                 <div className="w-5 h-5 rounded-full bg-[#c46949] text-white flex items-center justify-center">
  //                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
  //                     <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
  //                   </svg>
  //                 </div>
  //                 <span>Log In</span>
  //               </div>
    
  //               <div className="cursor-pointer hover:text-[#c46949] transition-colors ml-2">
  //                 Cart (0)
  //               </div>
    
  //             </div>
  //           </div>
    
  //           {/* Bottom Row: Navigation Links */}
  //           <nav className="flex justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium text-gray-700">
  //             <a href="#" className="hover:text-[#c46949] transition-colors">Shop All</a>
  //             <a href="#" className="hover:text-[#c46949] transition-colors">Our Story</a>
  //             <a href="#" className="hover:text-[#c46949] transition-colors">Our Craft</a>
  //             <a href="#" className="hover:text-[#c46949] transition-colors">Gift Card</a>
  //             <a href="#" className="hover:text-[#c46949] transition-colors">Contact</a>
  //           </nav>
  //         </header>
    
  //         {/* Hero Section */}
  //         <main className="relative w-full h-[60vh] md:h-[70vh] max-h-[800px] overflow-hidden">
  //           {/* Unsplash Placeholder Image matching the aesthetic */}
  //           <img 
  //             src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=2000&auto=format&fit=crop" 
  //             alt="Woman holding an elegant leather handbag" 
  //             className="absolute inset-0 w-full h-full object-cover object-center"
  //           />
            
  //           {/* Subtle Dark Overlay to ensure text pops */}
  //           <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center text-center px-4">
              
  //             <h2 className="text-white text-3xl md:text-5xl font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] mb-8 drop-shadow-md">
  //               Cue the Color
  //             </h2>
              
  //             {/* Ghost Button */}
  //             <button className="border border-white text-white px-8 py-3 text-xs md:text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm bg-white/10">
  //               Shop the collection
  //             </button>
              
  //           </div>
  //         </main>
    
  //       </div>
  //     );
  //   };
    
  //   export default Hero;`,
  // },
];