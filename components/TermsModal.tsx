import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-3">
             <ShieldAlert className="text-purple-500" />
             <h3 className="text-xl font-bold text-white">شرایط استفاده از خدمات VIIIN</h3>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-8 max-h-[60vh] overflow-y-auto text-slate-300 space-y-4 leading-relaxed custom-scrollbar">
          <p>به سرور ماتریکس VIIIN خوش آمدید. با استفاده از این سرویس، شما با موارد زیر موافقت می‌کنید:</p>
          
          <h4 className="text-white font-bold mt-6">۱. حریم خصوصی</h4>
          <p>ما هیچ‌گونه اطلاعاتی از پیام‌های شما را ذخیره نمی‌کنیم. تمام پیام‌ها به صورت End-to-End رمزنگاری می‌شوند و تنها فرستنده و گیرنده قادر به خواندن آن‌ها هستند.</p>

          <h4 className="text-white font-bold mt-6">۲. محتوای مجاز</h4>
          <p>استفاده از سرور برای فعالیت‌های غیرقانونی، اسپم، یا آزار و اذیت دیگران ممنوع است و منجر به مسدود شدن حساب کاربری خواهد شد.</p>

          <h4 className="text-white font-bold mt-6">۳. مسئولیت‌پذیری</h4>
          <p>مسئولیت حفظ کلیدهای رمزنگاری (Recovery Keys) بر عهده کاربر است. در صورت گم شدن کلیدها، بازگردانی پیام‌های قدیمی امکان‌پذیر نخواهد بود.</p>

          <h4 className="text-white font-bold mt-6">۴. تغییرات سرویس</h4>
          <p>VIIIN حق دارد در هر زمان تغییراتی در زیرساخت سرویس ایجاد کند، هرچند تلاش ما بر پایداری ۱۰۰٪ است.</p>
        </div>

        <div className="p-6 border-t border-white/10 bg-black/40 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
          >
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;