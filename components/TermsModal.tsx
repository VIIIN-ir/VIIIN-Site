import React from 'react';
import { ShieldAlert, X } from 'lucide-react';
import { config } from '../config';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} />

      <div className="modal-card">
        <div className="modal-head">
          <div className="modal-head-title">
            <ShieldAlert color="#a855f7" />
            <h3 style={{ margin: 0 }}>شرایط استفاده از خدمات VIIIN</h3>
          </div>
          <button onClick={onClose} className="modal-close" aria-label="بستن">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <p>با استفاده از سرویس VIIIN، شما با قوانین زیر موافقت می‌کنید:</p>
          {config.terms.map((term, index) => (
            <div key={`${term.title}-${index}`}>
              <h4>{term.title}</h4>
              {term.content && <p style={{ whiteSpace: 'pre-line' }}>{term.content}</p>}
            </div>
          ))}
        </div>

        <div className="modal-foot">
          <button onClick={onClose} className="modal-confirm">
            متوجه شدم
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
