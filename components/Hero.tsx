
import React from 'react';
import { ChevronDown, Globe, ShieldCheck } from 'lucide-react';
import { config } from '../config';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-20 relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-xs text-slate-300">سرور ماتریکس آنلاین است</span>
      </div>

      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 drop-shadow-2xl">
        VIIIN
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
        وین، زیرساخت امن و غیرمتمرکز ارتباطات شما.
        <br />
        میزبانی حرفه‌ای پروتکل ماتریکس برای گفتگوهای امن.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <button 
           onClick={() => document.getElementById('web-clients')?.scrollIntoView({behavior: 'smooth'})}
           className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
        >
          <Globe size={20} />
          نسخه وب (آنلاین)
        </button>
        <button 
           onClick={() => document.getElementById('downloads')?.scrollIntoView({behavior: 'smooth'})}
           className="px-8 py-4 glass-panel text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
        >
          <ShieldCheck size={20} />
          دانلود اپلیکیشن
        </button>
      </div>

      <div className="absolute bottom-[-50px] animate-bounce opacity-50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
