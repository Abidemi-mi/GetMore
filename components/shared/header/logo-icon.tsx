import { ShoppingCart } from "lucide-react";

export const LogoIcon = () => {
  return (
    <div className="relative flex items-center justify-center mr-2">
      {/* Brilliant Ambient Glow behind the logo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 blur-xl opacity-30 dark:opacity-50 rounded-2xl scale-110" />
      
      {/* Premium Glassmorphic Monogram Box */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 overflow-hidden transform transition duration-300 hover:scale-105 hover:rotate-1">
        
        {/* Inner geometric sheen to add texture */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/30 to-transparent -translate-x-1/4 -translate-y-1/2 rotate-12" />
        
        {/* Bold 'GM' Typography within the Box */}
        <div className="flex z-10 drop-shadow-md pb-0.5">
          <span className="font-extrabold text-[22px] text-white tracking-tighter pr-0.5">G</span>
          <span className="font-extrabold text-[22px] text-zinc-100 tracking-tighter">M</span>
        </div>
      </div>
      
      {/* Intersection Cart Icon (Creates the combined visual logic) */}
      <div className="absolute -bottom-2 -right-2 bg-white dark:bg-zinc-950 p-[5px] rounded-full shadow-xl border border-gray-100 dark:border-zinc-800 z-20">
        <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full p-1">
          <ShoppingCart className="w-3.5 h-3.5 text-white" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};
