import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-black">
      {/* Animated Blobs */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"
      />
      <div 
        className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"
      />
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Background;