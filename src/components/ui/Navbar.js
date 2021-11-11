import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleMobileMenu, active }) => {
  return (
    <div className='sticky top-0 z-50 opacity-100 bg-brand-bg'>
      <nav className='shadow-lg font-nunito'>
        <div className='container flex flex-wrap items-center justify-between py-3 xl:max-w-full md:py-4'>
          <a href='/'>
            <h1 className='text-3xl font-extrabold lg:text-5xl text-brand'>
              ReTail
            </h1>
          </a>

          <div className='ml-auto text-4xl cursor-pointer text-text-secondary hover:text-text-primary lg:hidden'>
            <FaBars onClick={toggleMobileMenu} />
          </div>

          <div>
            <ul className='hidden list-none lg:flex'>
              <li className='py-2 ml-8 text-lg font-bold text-brand-secondary hover:text-brand'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'activeLink' : 'blue'
                  }
                  exact='true'
                >
                  <i className='fa fa-house'></i> Home
                </NavLink>
              </li>

              <li className='py-2 ml-8 text-lg font-bold text-brand-secondary hover:text-brand'>
                <NavLink
                  to='/docs'
                  className={({ isActive }) =>
                    isActive ? 'activeLink' : 'blue'
                  }
                >
                  <i class='fa-solid fa-book-open'></i> Docs
                </NavLink>
              </li>
              <li
                className='py-2 ml-8 text-lg font-bold text-brand-secondary hover:text-brand'
                activeClassName='activeLink'
              >
                <a
                  href='https://github.com/PravunathSingh/ReTail'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='flex items-center justify-between'>
                    <i className='mr-1 fab fa-github'></i>
                    <p>GitHub</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <CurtainMenuPage open={open} /> */}
    </div>
  );
};

export default Navbar;
