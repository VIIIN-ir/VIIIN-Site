
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
    <div className="relative min-h-screen w-full selection:bg-purple-500/30 selection:text-white">
      {/* Animated Liquid Background */}
      <Background />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenTerms={() => setIsTermsOpen(true)} />
        
        <main className="flex-grow container mx-auto px-4 py-8 space-y-24 sm:space-y-32">
          <section id="home" className="pt-20">
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

      {/* Terms of Service Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};

export default App;
