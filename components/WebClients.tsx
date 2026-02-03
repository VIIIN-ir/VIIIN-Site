
import React from 'react';
import { Globe, ArrowLeft, Zap, Layout, Shield } from 'lucide-react';
import { config } from '../config';

const WebClients: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
        case 0: return <Shield className="w-6 h-6" />;
        case 1: return <Layout className="w-6 h-6" />;
        case 2: return <Zap className="w-6 h-6" />;
        default: return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">نسخه وب</h2>
        <p className="text-slate-400 text-lg">بدون نیاز به نصب، از طریق مرورگر به سرور متصل شوید</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {config.webClients.map((client, index) => (
          <a 
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative glass-panel p-1 rounded-3xl transition-all duration-300 hover:-translate-y-2"
          >
             {/* Gradient Border Effect */}
             <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${client.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
             
             <div className="relative h-full bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[20px] p-6 flex flex-col items-start border border-white/5 group-hover:border-white/10 overflow-hidden">
                
                {/* Background Glow */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${client.color} blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity`} />

                <div className="flex justify-between items-start w-full mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center text-white shadow-lg`}>
                        {getIcon(index)}
                    </div>
                    {client.recommended && (
                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white border border-white/10">
                            پیشنهادی
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    {client.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all">
                    <span>ورود به سامانه</span>
                    <ArrowLeft size={16} />
                </div>
             </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default WebClients;
