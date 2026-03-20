import React from 'react';
import { ArrowLeft, Globe, Layout, Shield, Zap } from 'lucide-react';
import { config } from '../config';

const colorClasses = [
  { border: 'gradient-purple-blue', glow: 'gradient-br-purple-blue' },
  { border: 'gradient-blue-cyan', glow: 'gradient-br-blue-cyan' },
  { border: 'gradient-purple-indigo', glow: 'gradient-br-purple-indigo' },
];

const WebClients: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield size={24} />;
      case 1:
        return <Layout size={24} />;
      case 2:
        return <Zap size={24} />;
      default:
        return <Globe size={24} />;
    }
  };

  return (
    <div>
      <div className="section-head">
        <h2>نسخه وب</h2>
        <p>بدون نیاز به نصب، از طریق مرورگر به سرور متصل شوید</p>
      </div>

      <div className="web-clients-grid">
        {config.webClients.map((client, index) => {
          const palette = colorClasses[index] ?? colorClasses[0];
          return (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="web-card glass-panel"
            >
              <div className={`web-card-border ${palette.border}`} />
              <div className={`web-card-glow ${palette.glow}`} />

              <div className="web-card-inner">
                <div className="web-card-top">
                  <div className={`web-card-icon ${palette.glow}`}>{getIcon(index)}</div>
                  {client.recommended && <span className="badge">پیشنهادی</span>}
                </div>

                <h3>{client.name}</h3>
                <p>{client.description}</p>

                <div className="web-card-cta">
                  <span>ورود به سامانه</span>
                  <ArrowLeft size={16} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default WebClients;
