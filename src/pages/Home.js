import About from 'components/about/About';
import Featured from 'components/feature/Featured';
import Hero from 'components/hero/Hero';
import Team from 'components/team/Team';
import React from 'react';

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <Team isHome />
    </>
  );
};

export default Home;
