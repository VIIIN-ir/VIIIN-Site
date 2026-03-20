import React from 'react';
import { ChevronDown, Globe, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="status-pill">
        <span className="status-dot" />
        <span>سرور ماتریکس آنلاین است</span>
      </div>

      <h1 className="hero-title">VIIIN</h1>

      <p className="hero-text">
        وین، زیرساخت امن و غیرمتمرکز ارتباطات شما.
        <br />
        میزبانی حرفه‌ای پروتکل ماتریکس برای گفتگوهای امن.
      </p>

      <div className="hero-actions">
        <button
          onClick={() => document.getElementById('web-clients')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-primary"
        >
          <Globe size={20} />
          نسخه وب (آنلاین)
        </button>
        <button
          onClick={() => document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn btn-secondary glass-panel"
        >
          <ShieldCheck size={20} />
          دانلود اپلیکیشن
        </button>
      </div>

      <div className="hero-bounce">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
