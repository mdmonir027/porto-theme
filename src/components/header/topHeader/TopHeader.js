import Container from 'components/shared/container/Container';
import SocialLinks from 'components/shared/links/SocialLinks';
import React from 'react';
import { Link } from 'react-router-dom';
const TopHeader = () => {
  return (
    <div className='bg-gray-100 py-3'>
      <Container>
        <div className='flex justify-between'>
          <ul className='flex '>
            <Item path='/about-us' value='About Us' />
            <Item path='/contact-us' value='Contact Us' />
          </ul>
          <div>
            <SocialLinks />
          </div>
        </div>
      </Container>
    </div>
  );
};

const Item = ({ path = '/', value }) => (
  <li className='mr-2 text-sm text-gray-600 hover:text-black-hover'>
    <Link to={path}>{value}</Link>
  </li>
);

export default TopHeader;
