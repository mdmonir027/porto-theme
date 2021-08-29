import React from 'react';
import { Link } from 'react-router-dom';

const Desc = ({ titleA, titleB, subTitle, text, path, link }) => {
  return (
    <div className='w-full'>
      <h2 className='text-black-main text-2xl mb-3'>
        {titleA} <span className='font-black'> {titleB}</span>
      </h2>
      <h5 className='text-xl text-black-hover font-medium mb-6 w-9/12 leading-8'>
        {subTitle}
      </h5>
      <p className='text-sm text-black-hover w-11/12 leading-6 font-medium'>
        {text}
      </p>
      <Link
        to={path}
        className='btn-dark py-4 px-6 inline-block mt-5 uppercase tracking-wider font-semibold text-xs'
      >
        {link}
      </Link>
    </div>
  );
};

export default Desc;
