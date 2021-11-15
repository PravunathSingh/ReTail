import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const DATA_HTML = `<button className='btn btn-small btn-primary'>Small</button>
<button className='btn btn-dark'>Default</button>
<button className='btn btn-large btn-danger'>Large</button>
`;

const DATA_CSS = `@layer components {
  .btn-small {
    @apply px-4 py-1 text-base;
  }

  .btn-large {
    @apply px-10 py-3 text-xl lg:text-2xl;
  }

  // other styles for the classNames of btn and btn-primary, btn-success, btn-info, btn-danger and btn-dark remains same as the first CSS Snippet
}`;

const DifferenSizes = () => {
  return (
    <div className='my-8 font-nunito md:my-12 lg:my-16'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Different Sizes
      </h3>

      <div className='mb-3 space-x-1 space-y-3 md:mb-5 lg:mb-8 sm:space-x-3 md:space-x-8'>
        <button className='btn btn-small btn-primary'>Small</button>
        <button className='btn btn-dark'>Default</button>
        <button className='btn btn-large btn-danger'>Large</button>
      </div>

      <div>
        <h5 className='mb-2 text-lg font-semibold md:mb-3 lg:mb-4 lg:text-xl text-brand-primary'>
          HTML Snippet
        </h5>
        <div className='mb-5 md:mb-8 lg:mb-10'>
          <CopyBlock
            theme={dracula}
            wrapLines='true'
            language='html'
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
            language='css'
            text={DATA_CSS}
            showLineNumbers='false'
            codeBlock
          />
        </div>
      </div>
    </div>
  );
};

export default DifferenSizes;
