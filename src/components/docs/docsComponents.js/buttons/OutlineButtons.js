import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const DATA_HTML = `<button className='btn btn-outline-primary'>Primary</button>
<button className='btn btn-outline-success'>Success</button>
<button className='btn btn-outline-info'>Info</button>
<button className='btn btn-outline-danger'>Danger</button>
<button className='btn btn-outline-dark'>Dark</button>
`;

const DATA_CSS = `@layer components {
  .btn-outline-primary {
    @apply font-medium text-blue-800 border-2 border-blue-700 hover:bg-blue-700 hover:text-white;
  }

  .btn-outline-success {
    @apply font-medium text-green-800 border-2 border-green-700 hover:bg-green-700 hover:text-white;
  }

  .btn-outline-info {
    @apply font-medium text-yellow-800 border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white;
  }

  .btn-outline-danger {
    @apply font-medium text-red-800 border-2 border-red-700 hover:bg-red-700 hover:text-white;
  }

  .btn-outline-dark {
    @apply font-medium text-gray-800 border-2 border-gray-700 hover:bg-gray-700 hover:text-white;
  }

  // other styles for the classNames of btn and btn-primary, btn-success, btn-info, btn-danger and btn-dark remains same as the first CSS Snippet
}`;

const OutlineButtons = () => {
  return (
    <div className='my-8 font-nunito md:my-12 lg:my-16'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Outline Buttons
      </h3>

      <div className='mb-3 space-x-1 space-y-3 md:mb-5 lg:mb-8 sm:space-x-3 md:space-x-8'>
        <button className='btn btn-outline-primary'>Primary</button>
        <button className='btn btn-outline-success'>Success</button>
        <button className='btn btn-outline-info'>Info</button>
        <button className='btn btn-outline-danger'>Danger</button>
        <button className='btn btn-outline-dark'>Dark</button>
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

export default OutlineButtons;
