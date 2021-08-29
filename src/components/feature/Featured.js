import Container from 'components/shared/container/Container';
import allImages from 'data/allImages';
import React from 'react';
import shortid from 'shortid';
import Box from './Box';

const Featured = () => {
  const list = [
    {
      id: shortid(),
      image: allImages.featured.img1,
      title: 'SEO Optimization',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: shortid(),
      image: allImages.featured.img2,
      title: 'Pro Marketing Ads',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: shortid(),
      image: allImages.featured.img3,
      title: 'Secure Support',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  return (
    <div className='py-5'>
      <Container>
        <div className='sm:flex flex-wrap'>
          {list.map((item) => (
            <div key={item.id} className='md:w-1/2 lg:w-1/3 '>
              <Box title={item.title} text={item.text} image={item.image} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Featured;
