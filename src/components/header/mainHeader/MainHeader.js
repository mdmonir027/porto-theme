import Container from 'components/shared/container/Container';
import React, { useState } from 'react';
import Logo from './Logo';
import NavMenuList from './NavMenuList';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-primary-main py-3'>
      <Container>
        <div className='flex justify-between items-center flex-wrap'>
          <div className='w-1/2 md:w-auto'>
            <Logo />
          </div>
          <div className='w-1/2 text-right text-white text-2xl md:hidden'>
            <span onClick={() => setIsMenuOpen((prevState) => !prevState)}>
              <i className='fa fa-bars'></i>
            </span>
          </div>
          <div
            className={`w-full ${
              isMenuOpen ? 'h-full ' : 'h-0 '
            } transition-all duration-500 ease-in overflow-hidden md:h-full md:w-auto`}
          >
            <NavMenuList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
