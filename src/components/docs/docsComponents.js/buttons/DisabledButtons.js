import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

const DATA_HTML = `<button type='button' className='btn btn-primary disabled' disabled>
Primary
</button>
<button type='button' className='btn btn-success disabled' disabled>
Success
</button>
<button type='button' className='btn btn-info disabled' disabled>
Info
</button>
<button type='button' className='btn btn-danger disabled' disabled>
Danger
</button>
<button type='button' className='btn btn-dark disabled' disabled>
Dark
</button>
`;

const DATA_CSS = `@layer components {
  .disabled {
    @apply cursor-not-allowed opacity-60;
  }

  // other styles for the classNames of btn and btn-primary, btn-success, btn-info, btn-danger and btn-dark remains same as the first CSS Snippet
}`;

const DisabledButtons = () => {
  return (
    <div className='font-nunito'>
      <h3 className='mb-4 text-2xl font-semibold lg:mb-6 md:text-3xl text-text-brand'>
        Disabled Buttons
      </h3>

      <div className='mb-3 space-x-1 space-y-3 md:mb-5 lg:mb-8 sm:space-x-3 md:space-x-8'>
        <button type='button' className='btn btn-primary disabled' disabled>
          Primary
        </button>
        <button type='button' className='btn btn-success disabled' disabled>
          Success
        </button>
        <button type='button' className='btn btn-info disabled' disabled>
          Info
        </button>
        <button type='button' className='btn btn-danger disabled' disabled>
          Danger
        </button>
        <button type='button' className='btn btn-dark disabled' disabled>
          Dark
        </button>
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

export default DisabledButtons;
