import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import mountainCard from '../../../../assests/mountainCard.jpg';

const DATA_HTML = `<div className='mb-3 md:mb-5 lg:mb-8'>
<div className='card'>
  <img src={mountainCard} alt='' className='card-img' />

  <div className='card-content'>
    <h4 className='card-title'>Card Title</h4>
    <p className='card-body'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
      distinctio provident veniam, aspernatur libero numquam!
    </p>
  </div>
</div>
</div>`;

const DATA_CSS = `.card {
  @apply w-full overflow-hidden rounded-md shadow-lg md:w-4/12;
}

.card-img {
  @apply h-auto max-w-full;
}

.card-content {
  @apply px-3 py-3 md:px-5;
}

.card-title {
  @apply my-3 text-xl font-semibold text-text-brand lg:text-2xl md:my-5;
}

.card-body {
  @apply mb-3 text-sm font-medium text-text-brand-light md:mb-5 md:text-base;
}`;

const SingleCard = () => {
  return (
    <div className='my-8 font-nunito md:my-12 lg:my-16'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Single Card
      </h3>

      <div className='mb-3 md:mb-5 lg:mb-8'>
        <div className='card'>
          <img src={mountainCard} alt='' className='card-img' />

          <div className='card-content'>
            <h4 className='card-title'>Card Title</h4>
            <p className='card-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              distinctio provident veniam, aspernatur libero numquam!
            </p>
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

export default SingleCard;
