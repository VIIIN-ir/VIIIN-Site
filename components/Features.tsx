import React from 'react';
import { Activity, Lock, Network, Server, Share2, Shield, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div>
      <div className="section-head">
        <h2>قدرت گرفته از ماتریکس</h2>
        <p>استاندارد باز برای ارتباطات امن و غیرمتمرکز</p>
      </div>

      <div className="features-wrap">
        <div className="feature-main glass-panel">
          <div className="feature-main-glow" />
          <div className="feature-main-content">
            <div className="feature-main-icon">
              <Network className="text-white" size={32} />
            </div>
            <h3>چرا پروتکل ماتریکس؟</h3>
            <p>
              ماتریکس (Matrix) یک شبکه باز برای ارتباطات امن و غیرمتمرکز است. برخلاف پیام‌رسان‌های سنتی که
              اطلاعات شما را در سرورهای خود حبس می‌کنند، در ماتریکس شما مالک داده‌های خود هستید. سرور VIIIN
              به عنوان خانه شما در این شبکه عمل می‌کند.
            </p>

            <ul className="feature-list">
              <li>
                <span className="feature-list-icon">
                  <Server size={16} />
                </span>
                <span>فدریشن (Federation): ارتباط با کاربران سایر سرورها</span>
              </li>
              <li>
                <span className="feature-list-icon">
                  <Shield size={16} />
                </span>
                <span>رمزنگاری سرتاسری (E2EE) پیشرفته</span>
              </li>
              <li>
                <span className="feature-list-icon">
                  <Share2 size={16} />
                </span>
                <span>سازگاری با انواع کلاینت‌ها (موبایل و وب)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="feature-grid">
          <FeatureCard icon={<Lock size={20} />} title="حریم خصوصی" desc="داده‌های شما متعلق به شماست. بدون ردیابی تبلیغاتی و داده‌کاوی." tone="emerald" />
          <FeatureCard icon={<Network size={20} />} title="عدم تمرکز" desc="هیچ نقطه مرکزی شکست وجود ندارد. شبکه همیشه پایدار است." tone="blue" />
          <FeatureCard icon={<Zap size={20} />} title="سرعت بالا" desc="سرورهای VIIIN برای کمترین تاخیر (Latency) بهینه‌سازی شده‌اند." tone="amber" />

          <div className="feature-status glass-panel">
            <div className="feature-status-icon">
              <Activity size={24} />
            </div>
            <strong>Online</strong>
            <span>Server Status</span>
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
  tone: 'emerald' | 'blue' | 'amber';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc, tone }) => {
  return (
    <div className="feature-card glass-panel">
      <div className={`feature-icon-wrap ${tone}`}>{icon}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};

export default Features;
