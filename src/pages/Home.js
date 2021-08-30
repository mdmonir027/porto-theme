import About from 'components/about/About';
import Counter from 'components/counter/Counter';
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
      <Counter />
    </>
  );
};

export default Home;
