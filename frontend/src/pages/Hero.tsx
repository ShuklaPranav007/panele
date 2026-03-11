import React from 'react';
import { Eye, Mail, Lock, User } from 'lucide-react';

const SignUp = () => {
  return (
    <div className="min-h-screen w-full bg-slate-300 flex items-center justify-center p-6">
      {/* Container */}
      <div className="w-full max-w-5xl bg-[#fdfaf5] rounded-[3rem] shadow-2xl flex overflow-hidden min-h-[600px]">
        
        {/* LEFT: FORM SIDE */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-xs font-semibold px-4 py-1.5 rounded-full border border-zinc-200">Creatio</span>
            <h1 className="text-4xl font-bold mt-6 mb-2">Create an account</h1>
            <p className="text-zinc-500">Sign-up and get 30 day free trial</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-xs font-semibold text-zinc-600 block mb-2">Full name</label>
              <input type="text" className="w-full p-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Amelie Laurent" />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-600 block mb-2">Email</label>
              <input type="email" className="w-full p-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="amelielaurent982@gmail.com" />
            </div>
            <div>
              <label className="text-xs font-semibold text-zinc-600 block mb-2">Password</label>
              <div className="relative">
                <input type="password" className="w-full p-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-400" value="password123" />
                <Eye className="absolute right-4 top-4 text-zinc-400" size={20} />
              </div>
            </div>
            
            <button className="w-full bg-amber-400 py-4 rounded-xl font-bold text-white shadow-lg hover:bg-amber-500 transition-all">Submit</button>
          </form>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="py-3 rounded-xl border border-zinc-200 font-semibold flex items-center justify-center gap-2"> Apple</button>
            <button className="py-3 rounded-xl border border-zinc-200 font-semibold flex items-center justify-center gap-2">G Google</button>
          </div>

          <div className="flex justify-between mt-8 text-xs text-zinc-400 font-medium">
            <span>Have any account? <a href="#" className="text-zinc-800 underline">Sign in</a></span>
            <a href="#" className="underline">Terms & Conditions</a>
          </div>
        </div>

        {/* RIGHT: VISUAL SIDE */}
        <div className="w-1/2 bg-zinc-800 relative hidden md:block">
           <img 
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
             className="h-full w-full object-cover opacity-80" 
             alt="Team Collaboration"
           />
           
           {/* Floating Task Widget */}
           <div className="absolute top-10 left-10 right-10 bg-amber-400 p-4 rounded-2xl shadow-xl">
             <p className="font-bold text-sm">Task Review with Team</p>
             <p className="text-xs opacity-70">24 Rooms Available • 09:30am - 10:30am</p>
           </div>

           {/* Floating Calendar Widget */}
           <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl">
             <p className="font-bold text-sm">Daily Meeting</p>
             <p className="text-xs text-zinc-500 mb-2">12:00pm - 01:30pm</p>
             <div className="flex items-center gap-2">
               <div className="h-6 w-6 rounded-full bg-zinc-300" />
               <span className="text-xs font-bold">+2</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;