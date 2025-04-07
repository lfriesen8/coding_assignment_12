// --- About.tsx ---
import React from 'react';
import { Text } from '../components/Text';

const About = () => {
  return (
    <section id="about" style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', marginTop: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>About Me</h2>
      <Text>
        My name is Liam Friesen, a full-stack development student based in Manitoba with a passion for technology and music. 
        After attending the University of Manitoba, I found myself drawn back into education through Red River College where I’ve been sharpening my coding skills. 
        I’ve been actively involved in events like Tech Thursdays, constantly expanding my knowledge and connecting with other developers.
        
        Outside of tech, I’ve spent years in management, which has taught me leadership, foresight, and team coordination. 
        My long-time passion for music production fuels my biggest dream — to one day design my own DAW (Digital Audio Workstation) like FL Studio. 
        Combining this love for music with my technical know-how has given me a unique perspective in the dev world, and I’m excited to see where it leads.
      </Text>
    </section>
  );
};

export default About;