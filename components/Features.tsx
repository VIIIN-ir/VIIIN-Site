
import React from 'react';
import { Network, Lock, Zap, Server, Shield, Share2, Activity } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">قدرت گرفته از ماتریکس</h2>
        <p className="text-slate-400 text-lg">استاندارد باز برای ارتباطات امن و غیرمتمرکز</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Feature Card - Matrix */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-600/30 transition-all duration-700"></div>
            <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Network className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">چرا پروتکل ماتریکس؟</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                    ماتریکس (Matrix) یک شبکه باز برای ارتباطات امن و غیرمتمرکز است. برخلاف پیام‌رسان‌های سنتی که اطلاعات شما را در سرورهای خود حبس می‌کنند، در ماتریکس شما مالک داده‌های خود هستید.
                    سرور VIIIN به عنوان خانه شما در این شبکه عمل می‌کند.
                </p>
                <ul className="space-y-4 text-slate-400">
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                           <Server size={16} />
                        </div>
                        <span>فدریشن (Federation): ارتباط با کاربران سایر سرورها</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                           <Shield size={16} />
                        </div>
                        <span>رمزنگاری سرتاسری (E2EE) پیشرفته</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                           <Share2 size={16} />
                        </div>
                        <span>سازگاری با انواع کلاینت‌ها (موبایل و وب)</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* Matrix Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FeatureCard 
                icon={<Lock />}
                title="حریم خصوصی"
                desc="داده‌های شما متعلق به شماست. بدون ردیابی تبلیغاتی و داده‌کاوی."
                color="bg-emerald-500"
            />
            <FeatureCard 
                icon={<Network />}
                title="عدم تمرکز"
                desc="هیچ نقطه مرکزی شکست وجود ندارد. شبکه همیشه پایدار است."
                color="bg-blue-500"
            />
            <FeatureCard 
                icon={<Zap />}
                title="سرعت بالا"
                desc="سرورهای VIIIN برای کمترین تاخیر (Latency) بهینه‌سازی شده‌اند."
                color="bg-amber-500"
            />
             <div className="glass-panel p-6 rounded-3xl flex items-center justify-center text-center flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2 animate-pulse">
                    <Activity size={24} />
                </div>
                <span className="text-green-400 font-bold text-xl">Online</span>
                <p className="text-slate-500 font-mono text-sm">Server Status</p>
            </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, color }) => {
    return (
        <div className="glass-panel p-6 rounded-3xl hover:bg-white/5 transition-colors">
            <div className={`w-10 h-10 rounded-xl ${color} bg-opacity-20 flex items-center justify-center mb-4`}>
                <div className={`text-${color.split('-')[1]}-400`}>
                    {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
                </div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    );
};

export default Features;
