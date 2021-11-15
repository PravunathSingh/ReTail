import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const DATA_HTML = `<button className='btn btn-primary'>Primary</button>
<button className='btn btn-success'>Success</button>
<button className='btn btn-info'>Info</button>
<button className='btn btn-danger'>Danger</button>
<button className='btn btn-dark'>Dark</button>
`;

const DATA_CSS = `@layer components {
  .btn {
    @apply px-6 py-2 text-lg font-medium text-white transition-all duration-200 ease-in rounded-md shadow-md focus:outline-none lg:text-xl;
  }

  .btn-primary {
    @apply bg-blue-700 hover:bg-blue-600 focus:ring-2 ring-offset-2 ring-blue-600 hover:-translate-y-1;
  }

  .btn-success {
    @apply bg-green-700 hover:bg-green-600 focus:ring-2 ring-offset-2 ring-green-600 hover:-translate-y-1;
  }

  .btn-info {
    @apply bg-yellow-500 hover:bg-yellow-400 focus:ring-2 ring-offset-2 ring-yellow-500 hover:-translate-y-1;
  }

  .btn-danger {
    @apply bg-red-700 hover:bg-red-600 focus:ring-2 ring-offset-2 ring-red-600 hover:-translate-y-1;
  }

  .btn-dark {
    @apply bg-gray-700 hover:bg-gray-600 focus:ring-2 ring-offset-2 ring-gray-600 hover:-translate-y-1;
  }
}`;

const NormalButton = () => {
  return (
    <div className='my-8 font-nunito md:my-12 lg:my-16'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Normal
      </h3>

      <div className='mb-3 space-x-1 space-y-3 md:mb-5 lg:mb-8 sm:space-x-3 md:space-x-8'>
        <button className='btn btn-primary'>Primary</button>
        <button className='btn btn-success'>Success</button>
        <button className='btn btn-info'>Info</button>
        <button className='btn btn-danger'>Danger</button>
        <button className='btn btn-dark'>Dark</button>
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

export default NormalButton;
