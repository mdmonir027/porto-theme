import Container from 'components/shared/container/Container';
import Desc from 'components/shared/description/Desc';
import team from 'data/teamMember';
import React from 'react';
import Slider from 'react-slick';
import Member from './Member';

const Team = ({ isHome }) => {
  const desc = {
    titleA: 'Meet',
    titleB: 'Our Team',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc. Vivamus bibendum magna ex, et faucibus lacus venenatis eget',
    subTitle:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit massa enim Nullam id varius nunc.',
    link: 'Learn More',
    path: '/',
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className='py-24'>
      <Container>
        <div className='flex flex-wrap'>
          {isHome ? (
            <div className='w-1/2 box-border p-3'>
              <Slider {...settings}>
                {team.map((member) => (
                  <Member
                    name={member.name}
                    title={member.title}
                    desc={member.desc}
                    img={member.img}
                    links={member.links}
                    key={member.id}
                    isHome
                  />
                ))}
              </Slider>
            </div>
          ) : (
            <div className='w-full'>
              <div className='flex flex-wrap'>
                {team.map((member) => (
                  <div className='w-1/4 mb-8'>
                    <Member
                      name={member.name}
                      title={member.title}
                      desc={member.desc}
                      img={member.img}
                      links={member.links}
                      key={member.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {isHome && (
            <div className='w-1/2'>
              <Desc {...desc} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Team;
