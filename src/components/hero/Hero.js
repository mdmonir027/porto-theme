import allImages from 'data/allImages';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <Item1 />
        <Item2 />
      </Slider>
    </div>
  );
};

const Item1 = () => {
  return (
    <div
      className='h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${allImages.hero.img1})` }}
    >
      <div className='w-11/12 md:w-8/12 mx-auto h-full flex items-center'>
        <div className='w-full md:w-5/12 text-center'>
          <h3 className='text-xl text-black-hover mb-1'>DO YOU NEED A NEW</h3>
          <h1 className='text-5xl uppercase mb-1 font-black tracking-tighter text-black-hover'>
            Web Design
          </h1>
          <p className='text-black-hover font-medium'>
            Check out our options and features
          </p>
        </div>
      </div>
    </div>
  );
};
const Item2 = () => {
  return (
    <div
      className='h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${allImages.hero.img2})` }}
    >
      <div className=' mx-auto h-full flex items-center justify-center'>
        <div className=' text-center'>
          <h1 className='text-4xl md:text-5xl text-black-main font-black tracking-tighter mb-3'>
            INCREDIBLE DESIGNS
          </h1>
          <h3 className='text-black-hover  text-lg'>
            Porto is a huge success in the one of largest world's MarketPlace
          </h3>
          <Link
            to='/'
            className='inline-block btn-primary mt-6 text-xl py-4 px-5'
          >
            Get Start Now
            <span className='ml-4'>
              <i className='fa fa-arrow-right'></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
