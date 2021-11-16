import React from 'react';
import Footer from '../../ui/Footer';
import Header from '../../ui/Header';
import DocsNav from '../DocsNav';
import CardWithCTA from './cards/CardWithCTA';
import SingleCard from './cards/SingleCard';

const Cards = () => {
  return (
    <div className='font-nunito'>
      <Header />
      <div className='grid grid-cols-12'>
        <div className='container col-span-1 my-16 md:my-24 lg:my-32'>
          <DocsNav />
        </div>
        <div className='container col-span-11 my-16 md:my-24 lg:my-32'>
          <h1 className='text-3xl font-bold text-center md:text-4xl lg:text-5xl text-brand'>
            Cards
          </h1>

          <SingleCard />
          <CardWithCTA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
