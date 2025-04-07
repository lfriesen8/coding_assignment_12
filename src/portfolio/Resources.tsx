import React from 'react';
import { Card } from '../components/Card';
import { Img } from '../components/Img';

const resources = [
  {
    title: 'React Docs',
    description: 'The official docs — everything you need to master React.',
    image: 'https://reactjs.org/logo-og.png',
    link: 'https://reactjs.org/',
    buttonLabel: 'View',
  },
  {
    title: 'Docker Docs',
    description: 'Great resource for learning how to containerize your apps.',
    image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
    link: 'https://docs.docker.com/',
    buttonLabel: 'View',
  },
  {
    title: 'Coding Forum',
    description:
      'Great resource for coding community and help regarding coding.',
    image: 'https://www.thecodingforums.com/styles/default/custom/logo.png',
    link: 'https://www.thecodingforums.com/',
    buttonLabel: 'View',
  },
];

const Resources = () => {
  return (
    <section id="resources" style={{ marginTop: '2rem' }}>
      <h2>Resources</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Cards Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            flex: '1 1 50%',
          }}
        >
          {resources.map((resource, index) => (
            <div key={index} style={{ flex: '1 1 250px', minWidth: '250px' }}>
              <Card
                title={resource.title}
                description={resource.description}
                image={resource.image}
                link={resource.link}
                buttonLabel={resource.buttonLabel}
              />
            </div>
          ))}
        </div>

        {/* Image on the right */}
        <div style={{ flex: '1 1 40%', textAlign: 'center' }}>
          <Img
            src="https://www.superoffice.com/globalassets/blog/2017/10/technical-support.jpg"
            alt="Development Stack"
            width="100%"
            height="auto"
            borderRadius="10px"
          />
          <p style={{ marginTop: '1rem', fontWeight: '500' }}>
            A developers best friend!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;
