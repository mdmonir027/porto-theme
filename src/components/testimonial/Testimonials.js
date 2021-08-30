import Container from 'components/shared/container/Container';
import images from 'data/allImages';
import React from 'react';
import Slider from 'react-slick';
import shortid from 'shortid';
const Testimonials = () => {
  const testimonials = [
    {
      id: shortid(),
      image: images.team.img1,
      name: 'John Smith',
      title: 'Okler',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex.',
    },
    {
      id: shortid(),
      image: images.team.img2,
      name: 'John Smith',
      title: 'Okler',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti.',
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      className='bg-primary-main py-24 text-white'
      style={{
        backgroundImage: `linear-gradient(45deg, #1791cfeb, #1791cfeb) , url(${images.Testimonial})`,
      }}
    >
      <Container>
        <div className=''>
          <Slider {...settings}>
            {testimonials.map((item) => (
              <Testimonial
                key={item.id}
                name={item.name}
                text={item.text}
                title={item.title}
                image={item.image}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

const Testimonial = ({ image, name, text, title }) => (
  <div className='text-center w-11/12 md:w-8/12 mx-auto'>
    <div className='w-20 h-20 mx-auto rounded-full overflow-hidden mb-5'>
      <img src={image} alt={name} className='inline-block' />
    </div>
    <p className='text-sm tracking-wide font-normal leading-7 mb-8'>{text}</p>
    <p className='font-bold '>
      - {name} , {title}
    </p>
  </div>
);

export default Testimonials;
