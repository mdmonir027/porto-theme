import React from 'react';

const Box = ({ image, title, text }) => {
  return (
    <div className='flex py-5 items-center'>
      <div className='w-36'>
        <img src={image} alt={title} />
      </div>
      <div className='ml-5'>
        <h3 className='font-bold text-black-main text-xl mb-1'>{title}</h3>
        <p className='text-black-main text-base'>{text}</p>
      </div>
    </div>
  );
};

export default Box;
