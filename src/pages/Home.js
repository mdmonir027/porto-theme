import About from 'components/about/About';
import Featured from 'components/feature/Featured';
import Hero from 'components/hero/Hero';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <About />
    </>
  );
};

export default Home;
