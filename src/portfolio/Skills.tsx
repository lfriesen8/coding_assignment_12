import React from 'react';
import { Text } from '../components/Text';
import { Table } from '../components/Table';

const Skills = () => {
  return (
    <section style={{ marginTop: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Skills</h2>
      <Text>
        Here&apos;s a breakdown of my technical and practical background across
        software development and hands-on experience with computer hardware and
        different fields:
      </Text>

      {/* Flex wrapper for side-by-side tables */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          marginTop: '1.5rem',
          justifyContent: 'center',
        }}
      >
        <div style={{ flex: '1 1 400px' }}>
          <Table type="technical" />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <Table type="practical" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
