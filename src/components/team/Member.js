import { Item as SocialItem } from 'components/shared/links/SocialLinks';
import React from 'react';
import './Member.css';

const Member = ({ img, name, title, desc, links, isHome }) => {
  return (
    <div className='w-full px-2 py-1 box-border'>
      <div className='relative'>
        <div className=''>
          <img src={img} alt={title} />
        </div>
        {isHome ? (
          <>
            <div className='px-2 mt-5'>
              <h3 className='text-xl font-bold'>{name}</h3>
              <h5 className='text-sm font-light tracking-wider'>{title}</h5>
            </div>
          </>
        ) : (
          <div className='member__nameTitle absolute px-5 py-4'>
            <h3 className='text-base font-bold text-white member__name'>
              {name}
            </h3>
            <h5 className='text-xs font-light tracking-wider text-white absolute bg-primary-main px-4 py-1 member__title '>
              {title}
            </h5>
          </div>
        )}
      </div>
      {!isHome && (
        <div className=' mt-2'>
          <p className='text-sm leading-6 text-black-hover mb-3'>{desc}</p>
          <ul className='flex'>
            <SocialItem
              iconClass='fab fa-facebook-f'
              path={links.facebook}
              transparent={false}
            />
            <SocialItem
              iconClass='fab fa-twitter'
              path={links.twitter}
              transparent={false}
            />
            <SocialItem
              iconClass='fab fa-linkedin-in'
              path={links.linkedIn}
              transparent={false}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Member;
