import React from 'react';
import Home from './portfolio/Home';
import Work from './portfolio/Work';
import Skills from './portfolio/Skills';
import Resources from './portfolio/Resources';
import Setup from './portfolio/Setup';
import About from './portfolio/About';
import Contact from './portfolio/Contact';
import './App.css';

function App() {
  return (
    <>
      <nav
        style={{
          background: '#222',
          padding: '1rem',
          color: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <strong>My Portfolio</strong>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href="#about"
            style={{ color: '#fff', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            About Me
          </a>
          <a
            href="#contact"
            style={{ color: '#fff', textDecoration: 'none' }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            Contact
          </a>
        </div>
      </nav>

      <main style={{ padding: '2rem', background: 'linear-gradient(to bottom, #f3f3f3, #e4e4e4)' }}>
        <Home />

        {/* Work & Skills side by side */}
        <section
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              flex: '1 1 48%',
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <Work />
          </div>

          <div
            style={{
              flex: '1 1 48%',
              padding: '1rem',
              backgroundColor: '#fff',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <Skills />
          </div>
        </section>

        <Resources />
        <Setup />

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
