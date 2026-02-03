import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl py-12 mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-right">
                    <h3 className="text-2xl font-bold text-white mb-2">VIIIN</h3>
                    <p className="text-slate-500 text-sm">قدرت گرفته از پروتکل Matrix</p>
                </div>
                
                <div className="flex gap-6 text-slate-400 text-sm">
                    <a href="#" className="hover:text-white transition-colors">گیت‌هاب</a>
                    <a href="#" className="hover:text-white transition-colors">استتوس سرور</a>
                    <a href="#" className="hover:text-white transition-colors">حریم خصوصی</a>
                </div>

                <div className="text-slate-600 text-xs">
                    © 2024 VIIIN Server. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;