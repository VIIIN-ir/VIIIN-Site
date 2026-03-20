import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { config } from '../config';

const Support: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  return (
    <div className="support-panel">
      <div className="support-noise" />

      <div className="support-content">
        <div className="support-copy">
          <h2 className="support-title">نیاز به راهنمایی دارید؟</h2>
          <p>
            تیم پشتیبانی VIIIN به صورت ۲۴ ساعته آماده پاسخگویی به سوالات فنی و عمومی شما درباره سرور
            ماتریکس و تنظیمات کلاینت‌های مختلف (مانند Element) است.
          </p>

          <div className="support-contacts">
            <div className="support-contact">
              <div className="support-contact-icon">@</div>
              <span>{config.support.email}</span>
            </div>
            <div className="support-contact">
              <div className="support-contact-icon">#</div>
              <span>{config.support.matrixId}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="support-form">
          <div>
            <label htmlFor="support-email">ایمیل شما</label>
            <input
              id="support-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="support-message">پیام شما</label>
            <textarea
              id="support-message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea"
              placeholder="چطور می‌توانیم کمک کنیم؟"
            />
          </div>
          <button type="submit" disabled={isLoading} className="submit-btn">
            {isLoading ? (
              <Loader2 className="spin" />
            ) : isSent ? (
              'ارسال شد!'
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
