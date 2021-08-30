import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks = ({ transparent }) => {
  return (
    <ul className='flex'>
      <Item iconClass='fab fa-facebook-f' path='/' transparent={transparent} />
      <Item iconClass='fab fa-twitter' path='/' transparent={transparent} />
      <Item iconClass='fab fa-linkedin-in' path='/' transparent={transparent} />
    </ul>
  );
};

export const Item = ({ iconClass, path = '/', transparent = true }) => (
  <li
    className={`mx-2 text-center w-7 h-7 text-sm rounded-2xl flex justify-center items-center transition-all duration-500 ${
      transparent
        ? 'text-black-main hover:text-white hover:bg-blue-400'
        : 'bg-blue-400 text-white hover:bg-primary-hover'
    }  `}
  >
    <Link to={path} className='inline-block'>
      <i className={iconClass}></i>
    </Link>
  </li>
);
export const Item2 = ({ iconClass, path = '/' }) => (
  <li className='mx-2 text-center w-7 h-7 text-black-main hover:text-white hover:bg-blue-400 text-sm rounded-2xl flex justify-center items-center transition-all duration-500'>
    <Link to={path} className='inline-block'>
      <i className={iconClass}></i>
    </Link>
  </li>
);

export default SocialLinks;
