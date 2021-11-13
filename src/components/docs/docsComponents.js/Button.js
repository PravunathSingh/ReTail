import React from 'react';
import Header from '../../ui/Header';
import DocsNav from '../DocsNav';

const Button = () => {
  return (
    <div className='font-nunito'>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='container col-span-1 my-16 md:my-24 lg:my-32'>
          <DocsNav />
        </div>
        <div className='container col-span-11 my-16 md:my-24 lg:my-32'>
          <h1 className='text-3xl font-bold text-center md:text-4xl lg:text-5xl text-brand'>
            Buttons
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Button;
