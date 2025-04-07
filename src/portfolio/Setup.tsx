import React from 'react';

const Setup = () => {
  return (
    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
        Developer Setup
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'space-between',
          background: '#f5f5f5',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        }}
      >
        {/* Left Side: Dev Tools */}
        <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
          <p>
            <strong>💻 Laptop:</strong> MSI Cyborg i5 A12U
          </p>
          <p>
            <strong>🎨 VSCode Theme:</strong> One Dark Pro
          </p>
          <p>
            <strong>💻 Terminal:</strong> Windows Terminal with ZSH & Git Bash
          </p>
          <p>
            WSL and CMD Prompt with python as well as Kali and Virtual machine
          </p>
          <p>
            <strong>🔠 Font:</strong> Fira Code (ligatures enabled)
          </p>
        </div>

        {/* Right Side: Specs */}
        <div style={{ flex: '1 1 250px', minWidth: '250px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
            💾 System Specs
          </h3>
          <p>
            <strong>CPU:</strong> Intel i5-12450H
          </p>
          <p>
            <strong>GPU:</strong> RTX 2050 Laptop
          </p>
          <p>
            <strong>RAM:</strong> 16GB DDR4
          </p>
          <p>
            <strong>Storage:</strong> 512GB NVMe SSD
          </p>
          <p>
            <strong>Display:</strong> 144Hz FHD
          </p>
        </div>
      </div>
    </section>
  );
};

export default Setup;
