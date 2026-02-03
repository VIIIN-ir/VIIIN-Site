
import React, { useState, useEffect } from 'react';
import { Menu, X, Download, MessageCircle, FileText, Globe } from 'lucide-react';
import { config } from '../config';

interface NavbarProps {
  onOpenTerms: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerms }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-widest cursor-pointer flex items-center gap-2 group"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all">
             <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-white text-glow">VIIIN</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <Globe size={16} />
            امکانات
          </button>
          <button onClick={() => scrollToSection('downloads')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <Download size={16} />
            دانلود
          </button>
          <button onClick={onOpenTerms} className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <FileText size={16} />
            قوانین
          </button>
          <button onClick={() => scrollToSection('support')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2">
            <MessageCircle size={16} />
            پشتیبانی
          </button>
          
          <button 
             onClick={() => scrollToSection('web-clients')}
             className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full transition-all text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            ورود به نسخه وب
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <button onClick={() => scrollToSection('features')} className="text-slate-200 py-2 border-b border-white/5 text-right">امکانات سرور</button>
          <button onClick={() => scrollToSection('downloads')} className="text-slate-200 py-2 border-b border-white/5 text-right">دانلود کلاینت</button>
          <button onClick={() => { onOpenTerms(); setMobileMenuOpen(false); }} className="text-slate-200 py-2 border-b border-white/5 text-right">قوانین و شرایط</button>
          <button onClick={() => scrollToSection('support')} className="text-slate-200 py-2 text-right">پشتیبانی</button>
          <button onClick={() => scrollToSection('web-clients')} className="bg-purple-600 text-white py-3 rounded-xl text-center font-bold mt-2">
            ورود به نسخه وب
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
