import React from 'react';
import Header from '../../ui/Header';
import DocsNav from '../DocsNav';

const Accordion = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='container col-span-1 my-16 md:my-24 lg:my-32'>
          <DocsNav />
        </div>
        <div className='container col-span-11 my-16 md:my-24 lg:my-32'>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
