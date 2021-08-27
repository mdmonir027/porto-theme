import React from 'react';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <ul className='flex'>
      <Item iconClass='fab fa-facebook-f' path='/' />
      <Item iconClass='fab fa-twitter' path='/' />
      <Item iconClass='fab fa-linkedin-in' path='/' />
    </ul>
  );
};

const Item = ({ iconClass, path = '/' }) => (
  <li className='mx-2 text-center w-7 h-7 text-sm  text-black-main hover:text-white hover:bg-blue-400 rounded-2xl flex justify-center items-center transition-all duration-500'>
    <Link to={path} className='inline-block'>
      <i className={iconClass}></i>
    </Link>
  </li>
);

export default SocialLinks;
