import React from 'react';
import { Apple, Monitor, Smartphone } from 'lucide-react';
import { config } from '../config';

const Downloads: React.FC = () => {
  return (
    <div>
      <div className="downloads-header">
        <div>
          <h2 style={{ margin: '0 0 1rem', fontSize: 'clamp(1.875rem, 5vw, 3rem)' }}>دانلود کلاینت</h2>
          <p style={{ margin: 0, color: 'var(--slate-400)' }}>
            برای اتصال به سرور VIIIN، یکی از کلاینت‌های استاندارد ماتریکس را دریافت کنید.
          </p>
        </div>

        <div className="filter-chip">
          <button>همه</button>
        </div>
      </div>

      <div className="downloads-grid">
        <DownloadCard
          name="Element"
          desc="کلاینت رسمی و پیشنهادی ماتریکس. کامل‌ترین امکانات امنیتی."
          version={config.downloads.element.version}
          links={config.downloads.element}
          isPopular
        />
        <DownloadCard
          name="SchildiChat"
          desc="نسخه‌ای از Element با رابط کاربری بهبود یافته و حباب‌های پیام کلاسیک."
          version={config.downloads.schildichat.version}
          links={config.downloads.schildichat}
        />
        <DownloadCard
          name="FluffyChat"
          desc="رابط کاربری زیبا، ساده و دوست‌داشتنی برای موبایل."
          version={config.downloads.fluffychat.version}
          links={config.downloads.fluffychat}
        />
      </div>
    </div>
  );
};

interface DownloadCardProps {
  name: string;
  desc: string;
  version: string;
  links: { android?: string; ios?: string; desktop?: string };
  isPopular?: boolean;
}

const DownloadCard: React.FC<DownloadCardProps> = ({ name, desc, version, links, isPopular }) => {
  return (
    <div className="download-card glass-panel">
      {isPopular && <div className="popular-badge">پیشنهادی</div>}

      <div className="download-mark">{name[0]}</div>
      <h3>{name}</h3>
      <p className="download-desc">{desc}</p>

      <div className="download-meta">
        <span className="download-version">v{version}</span>
        <div className="download-platforms">
          {links.ios && <PlatformIcon icon={<Apple size={16} />} />}
          {links.android && <PlatformIcon icon={<Smartphone size={16} />} />}
          {links.desktop && <PlatformIcon icon={<Monitor size={16} />} />}
        </div>
      </div>

      <a href={links.desktop || links.android || '#'} target="_blank" rel="noreferrer" className="download-link">
        دانلود
      </a>
    </div>
  );
};

const PlatformIcon = ({ icon }: { icon: React.ReactNode }) => <div className="platform-icon">{icon}</div>;

export default Downloads;
