import Container from 'components/shared/container/Container';
import Desc from 'components/shared/description/Desc';
import allImages from 'data/allImages';
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='py-28 bg-gray-100'>
      <Container>
        <div className='md:flex'>
          <div className='md:w-1/2 px-8 box-border'>
            <Desc
              titleA='Who'
              titleB='We are'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna ex, et
        faucibus lacus venenatis eget'
              subTitle=' Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim.
        Nullam id varius nunc.'
              link='Learn More'
              path='/'
            />
          </div>
          <div className='md:w-1/2 relative mt-24 h-96'>
            <div className='absolute about__image1'>
              <img src={allImages.about.img1} alt='' />
            </div>
            <div className='absolute about__image2'>
              <img src={allImages.about.img2} alt='' />
            </div>
            <div className='absolute about__image3'>
              <img src={allImages.about.img3} alt='' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
