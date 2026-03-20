import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h3 className="footer-title">VIIIN</h3>
          <p>قدرت گرفته از پروتکل Matrix</p>
        </div>

        <div className="footer-links">
          <a href="#">گیت‌هاب</a>
          <a href="#">استتوس سرور</a>
          <a href="#">حریم خصوصی</a>
        </div>

        <div className="footer-meta footer-copy">© 2024 VIIIN Server. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
