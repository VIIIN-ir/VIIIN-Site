import React from 'react';
import { X, ShieldAlert } from 'lucide-react';
import { config } from '../config';

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
          <p>با استفاده از سرویس VIIIN، شما با قوانین زیر موافقت می‌کنید:</p>
          {config.terms.map((term, index) => (
            <div key={`${term.title}-${index}`} className="space-y-2">
              <h4 className="text-white font-bold mt-6">{term.title}</h4>
              {term.content && <p className="whitespace-pre-line">{term.content}</p>}
            </div>
          ))}
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
