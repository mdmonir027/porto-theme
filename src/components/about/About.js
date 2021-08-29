import Container from 'components/shared/container/Container';
import allImages from 'data/allImages';
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className='py-28 bg-gray-100'>
      <Container>
        <div className='flex'>
          <div className='md:w-1/2 px-8 box-border'>
            <h2 className='text-black-main text-2xl mb-3'>
              Who <span className='font-black'> We Are</span>
            </h2>
            <h5 className='text-xl text-black-hover font-medium mb-6 w-9/12 leading-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit massa
              enim. Nullam id varius nunc.
            </h5>
            <p className='text-sm text-black-hover w-11/12 leading-6 font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna
              ex, et faucibus lacus venenatis eget
            </p>
            <Link
              to='/'
              className='btn-dark py-4 px-6 inline-block mt-5 uppercase tracking-wider font-semibold text-xs'
            >
              Learn More
            </Link>
          </div>
          <div className='md:w-1/2 relative'>
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
