import React from 'react';
import { Card } from '../components/Card';

const Work = () => {
  const projects = [
    {
      title: 'Ruby on Rails Brewery Project',
      description:
        'Built a mock website using Ruby on Rails to showcase different craft breweries and beer across the USA.',
      image: '/rails.png', // ✅ Matches your actual file name
      link: 'https://github.com/lfriesen8/rails-brewery-project.',
      tech: ['Ruby', 'Rails 7.2', 'VS Code', 'WSL'],
    },
    {
      title: 'DJ Connect CMS Booking Website',
      description:
        'Content managing service for DJ bookings with full CRUD functionality. Came to me as I run a small DJ business.',
      image: '/djconnect.png', // ✅ Matches your actual file name
      link: 'https://github.com/lfriesen8/dj_connect',
      tech: ['PHP', 'Apache2', 'MySQL'],
    },

    {
        title: 'Mennonite Market Food Services',
        description:
          'Content managing service for Mennonite/European food delivery with full CRUD functionality.',
        image: '/rollkuchen.jpg', // 
        link: 'https://github.com/lfriesen8/mennonite_market',
        tech: ['Ruby', 'Rails', 'MySQL', 'Multiple gems'],
      },
  ];

  return (
    <section>
      <h2>My favorite projects</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
        }}
      >
        {projects.map((proj, index) => (
          <Card
            key={index}
            title={proj.title}
            description={proj.description}
            image={proj.image}
            link={proj.link}
            techList={proj.tech}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;

