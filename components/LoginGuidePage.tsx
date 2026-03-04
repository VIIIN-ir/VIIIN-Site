import React from 'react';
import Background from './Background';
import LoginGuide from './LoginGuide';

const LoginGuidePage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full selection:bg-purple-500/30 selection:text-white">
      <Background />
      <div className="relative z-10 min-h-screen container mx-auto px-4 py-8">
        <div className="pt-10 pb-6 flex items-center justify-between">
          <a href="/" className="text-sm text-slate-300 hover:text-white transition-colors">
            ← بازگشت به صفحه اصلی
          </a>
        </div>
        <LoginGuide />
      </div>
    </div>
  );
};

export default LoginGuidePage;
