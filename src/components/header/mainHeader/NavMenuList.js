import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

const list = [
  {
    id: shortid(),
    path: '/',
    value: 'Home',
  },
  {
    id: shortid(),
    path: '/about',
    value: 'About',
  },
  {
    id: shortid(),
    path: '/services',
    value: 'Services',
  },
  {
    id: shortid(),
    path: '/portfolio',
    value: 'Portfolio',
  },
  {
    id: shortid(),
    path: '/gallery',
    value: 'Gallery',
  },
  {
    id: shortid(),
    path: '/contact-us',
    value: 'Contact Us',
  },
];

const NavMenuList = () => {
  return (
    <div>
      <ul className='md:flex'>
        {list.map((l) => (
          <Item key={l.id} path={l.path} value={l.value} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ value, path = '/' }) => (
  <li>
    <Link
      to={path}
      className=' text-gray-100 mr-3 tracking-wide text-base font-semibold hover:bg-white hover:text-black-main  py-2 px-3 block transition-colors duration-300 '
    >
      {value}
    </Link>
  </li>
);

export default NavMenuList;
