
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { config } from '../config';

const Support: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
            setEmail('');
            setMessage('');
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    return (
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl p-8 md:p-16">
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-white mb-6">نیاز به راهنمایی دارید؟</h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        تیم پشتیبانی VIIIN به صورت ۲۴ ساعته آماده پاسخگویی به سوالات فنی و عمومی شما درباره سرور ماتریکس و تنظیمات کلاینت‌های مختلف (مانند Element) است.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">@</div>
                            <span>{config.support.email}</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">#</div>
                            <span>{config.support.matrixId}</span>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-black/20 p-6 rounded-3xl border border-white/5">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">ایمیل شما</label>
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">پیام شما</label>
                        <textarea 
                            required
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-slate-600 resize-none"
                            placeholder="چطور می‌توانیم کمک کنیم؟"
                        />
                    </div>
                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        {isLoading ? (
                            <Loader2 className="animate-spin" />
                        ) : isSent ? (
                            "ارسال شد!"
                        ) : (
                            <>
                                <span>ارسال پیام</span>
                                <Send size={18} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;
