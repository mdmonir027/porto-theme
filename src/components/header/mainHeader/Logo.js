import allImages from 'data/allImages';
import React from 'react';

const Logo = () => {
  return (
    <div className='h-14 w-28'>
      <img src={allImages.logo} alt='' className='object-cover' />
    </div>
  );
};

export default Logo;
