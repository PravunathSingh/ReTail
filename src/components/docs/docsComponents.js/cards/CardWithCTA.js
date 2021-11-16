import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import beachCard from '../../../../assests/beachCard.jpg';
import mountainCard from '../../../../assests/mountainCard.jpg';
import spaceCard from '../../../../assests/spaceCard.jpg';

const DATA_HTML = `<div className='card'>
<img src={beachCard} alt='' className='card-img' />

<div className='card-content'>
  <h4 className='card-title'>Card Title</h4>
  <p className='card-body'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
    distinctio provident veniam, aspernatur libero numquam!
  </p>

  <a href='#' className='card-link'>
    Read More
  </a>
</div>
</div>`;

const DATA_CSS = `.card-link {
  @apply mb-3 font-semibold text-indigo-700 md:mb-5 md:text-lg;
}`;

const CardWithCTA = () => {
  return (
    <div className='my-8 font-nunito md:my-12 lg:my-16'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Card With CTA
      </h3>

      <div className='flex flex-wrap gap-8 mb-3 md:mb-5 lg:mb-8'>
        <div className='card'>
          <img src={beachCard} alt='' className='card-img' />

          <div className='card-content'>
            <h4 className='card-title'>Card Title</h4>
            <p className='card-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              distinctio provident veniam, aspernatur libero numquam!
            </p>

            <a href='#' className='card-link'>
              Read More
            </a>
          </div>
        </div>

        <div className='card'>
          <img src={mountainCard} alt='' className='card-img' />

          <div className='card-content'>
            <h4 className='card-title'>Card Title</h4>
            <p className='card-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              distinctio provident veniam, aspernatur libero numquam!
            </p>
            <a href='#' className='card-link'>
              Read More
            </a>
          </div>
        </div>

        <div className='card'>
          <img src={spaceCard} alt='' className='card-img' />

          <div className='card-content'>
            <h4 className='card-title'>Card Title</h4>
            <p className='card-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              distinctio provident veniam, aspernatur libero numquam!
            </p>
            <a href='#' className='card-link'>
              Read More
            </a>
          </div>
        </div>
      </div>

      <div>
        <h5 className='mb-2 text-lg font-semibold md:mb-3 lg:mb-4 lg:text-xl text-brand-primary'>
          HTML Snippet
        </h5>
        <div className='mb-5 md:mb-8 lg:mb-10'>
          <CopyBlock
            theme={dracula}
            wrapLines='true'
            language='HTML'
            text={DATA_HTML}
            showLineNumbers='false'
            codeBlock
          />
        </div>

        <h5 className='mb-2 text-lg font-semibold md:mb-3 lg:mb-4 lg:text-xl text-brand-primary'>
          CSS Snippet
        </h5>
        <div className='mb-5 md:mb-8 lg:mb-10'>
          <CopyBlock
            theme={dracula}
            wrapLines='true'
            language='CSS'
            text={DATA_CSS}
            showLineNumbers='false'
            codeBlock
          />
        </div>
      </div>
    </div>
  );
};

export default CardWithCTA;
