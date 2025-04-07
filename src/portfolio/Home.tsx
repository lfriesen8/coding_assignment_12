import React from 'react';
import { HeroImage } from '../components/HeroImage';
import { Text } from '../components/Text';

const Home = () => {
  return (
    <section>
      <HeroImage
        src="https://designcollaborative.com/wp-content/uploads/2021/09/Slider6_Sweetwater-Electric-Guitars-Area-e1633015825122.jpg"
        alt="Liam Friesen Hero"
        height="400px"
        overlayColor="rgba(0, 0, 0, 0.5)"
        text="Liam Friesen - Full Stack Developer"
        textColor="#fff"
      />

      <h2>Welcome 👋</h2>
      <Text>
        Hey, I’m Liam Friesen — a full-stack web development student based in Manitoba. I’m passionate about blending creative and technical skills, whether that’s through code, music, or design.
      </Text>
      <Text>
        This portfolio showcases the work I’ve completed throughout the program, including my custom React component library, project builds, and my full dev setup.
      </Text>
    </section>
  );
};

export default Home;