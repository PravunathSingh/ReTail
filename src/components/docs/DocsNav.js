import React from 'react';
import { NavLink } from 'react-router-dom';

const DocsNav = () => {
  return (
    <div>
      <NavLink to='/docs/accordion' exact='true'>
        <h1>Accordion</h1>
      </NavLink>
      <NavLink to='/docs/button' exact='true'>
        <h1>Button</h1>
      </NavLink>
      <NavLink to='/docs/cards' exact='true'>
        <h1>Cards</h1>
      </NavLink>
    </div>
  );
};

export default DocsNav;
