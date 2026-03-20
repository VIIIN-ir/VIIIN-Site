import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="background-shell" aria-hidden="true">
      <div className="blob one" />
      <div className="blob two" />
      <div className="blob three" />
      <div className="noise-overlay" />
    </div>
  );
};

export default Background;
