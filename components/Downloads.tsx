
import React from 'react';
import { Smartphone, Monitor, Apple } from 'lucide-react';
import { config } from '../config';

const Downloads: React.FC = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">دانلود کلاینت</h2>
           <p className="text-slate-400">برای اتصال به سرور VIIIN، یکی از کلاینت‌های استاندارد ماتریکس را دریافت کنید.</p>
        </div>
        
        <div className="flex gap-2 p-1 bg-white/5 rounded-lg border border-white/5">
             <button className="px-4 py-2 bg-white/10 rounded-md text-white text-sm font-medium">همه</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Element Card */}
        <DownloadCard 
            name="Element"
            desc="کلاینت رسمی و پیشنهادی ماتریکس. کامل‌ترین امکانات امنیتی."
            version={config.downloads.element.version}
            links={config.downloads.element}
            isPopular
        />
        
        {/* SchildiChat Card (Replaced Delta Chat) */}
        <DownloadCard 
            name="SchildiChat"
            desc="نسخه‌ای از Element با رابط کاربری بهبود یافته و حباب‌های پیام کلاسیک."
            version={config.downloads.schildichat.version}
            links={config.downloads.schildichat}
        />

        {/* FluffyChat Card */}
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
        <div className="glass-panel rounded-3xl p-6 relative group hover:border-white/20 transition-all duration-300 flex flex-col">
            {isPopular && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    پیشنهادی
                </div>
            )}
            
            <div className="h-16 w-16 bg-white/5 rounded-2xl mb-6 flex items-center justify-center text-2xl font-bold text-white border border-white/5">
                {name[0]}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">{desc}</p>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5 mb-4">
                <span className="text-xs text-slate-500 font-mono">v{version}</span>
                <div className="flex gap-2">
                    {links.ios && <PlatformIcon icon={<Apple size={16} />} />}
                    {links.android && <PlatformIcon icon={<Smartphone size={16} />} />}
                    {links.desktop && <PlatformIcon icon={<Monitor size={16} />} />}
                </div>
            </div>
            
            <a 
                href={links.desktop || links.android || "#"}
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white font-medium transition-colors text-center block"
            >
                دانلود
            </a>
        </div>
    )
}

const PlatformIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-slate-400">
        {icon}
    </div>
)

export default Downloads;
