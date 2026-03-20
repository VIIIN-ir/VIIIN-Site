import React, { useEffect, useState } from 'react';
import { Download, FileText, Globe, Menu, MessageCircle, X } from 'lucide-react';

interface NavbarProps {
  onOpenTerms: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerms }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`site-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container site-nav-inner">
        <div className="logo-button" onClick={() => scrollToSection('home')}>
          <img src="/viiin-mark.svg" alt="لوگوی VIIIN" className="logo-mark" />
          <span className="text-glow">VIIIN</span>
        </div>

        <div className="nav-links">
          <button onClick={() => scrollToSection('features')} className="nav-link">
            <Globe size={16} />
            امکانات
          </button>
          <button onClick={() => scrollToSection('downloads')} className="nav-link">
            <Download size={16} />
            دانلود
          </button>
          <button onClick={onOpenTerms} className="nav-link">
            <FileText size={16} />
            قوانین
          </button>
          <button onClick={() => scrollToSection('support')} className="nav-link">
            <MessageCircle size={16} />
            پشتیبانی
          </button>
          <button onClick={() => scrollToSection('web-clients')} className="nav-cta">
            ورود به نسخه وب
          </button>
        </div>

        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection('features')}>امکانات سرور</button>
          <button onClick={() => scrollToSection('downloads')}>دانلود کلاینت</button>
          <button
            onClick={() => {
              onOpenTerms();
              setMobileMenuOpen(false);
            }}
          >
            قوانین و شرایط
          </button>
          <button onClick={() => scrollToSection('support')}>پشتیبانی</button>
          <button className="primary" onClick={() => scrollToSection('web-clients')}>
            ورود به نسخه وب
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
