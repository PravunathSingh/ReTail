import React from 'react';
import {
  SidebarContainer,
  Icon,
  Closeicon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLinks,
} from './SidebarElements';

const SideBar = ({ isOpen, toggleMobileMenu }) => {
  return (
    <div className='font-nunito'>
      <SidebarContainer isOpen={isOpen} toggleMobileMenu={toggleMobileMenu}>
        <Icon onClick={toggleMobileMenu}>
          <Closeicon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLinks to='/'>Home</SidebarLinks>
            <SidebarLinks to='/about'>About</SidebarLinks>
            <SidebarLinks to='/docs'>Docs</SidebarLinks>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </div>
  );
};

export default SideBar;
