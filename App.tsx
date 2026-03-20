import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import WebClients from './components/WebClients';
import TermsModal from './components/TermsModal';
import Support from './components/Support';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <div className="app-shell">
      <Background />

      <div className="app-content">
        <Navbar onOpenTerms={() => setIsTermsOpen(true)} />

        <main className="main-content container">
          <section id="home">
            <Hero />
          </section>

          <section id="web-clients">
            <WebClients />
          </section>

          <section id="features">
            <Features />
          </section>

          <section id="downloads">
            <Downloads />
          </section>

          <section id="support">
            <Support />
          </section>
        </main>

        <Footer />
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};

export default App;
