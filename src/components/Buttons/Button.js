import React from 'react';

const Button = () => {
  return (
    <div className='buttonWrapper'>
      <button className={classes.button1}>
        <svg
          height='20pt'
          viewBox='0 0 512 512'
          width='20pt'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
        </svg>
        <p> decrement</p>
      </button>
      <p>Counter: {count}</p>
      <button className={classes.button2}>
        <svg
          height='20pt'
          viewBox='0 0 512 512'
          width='20pt'
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
        >
          <path d='m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0' />
          <path d='m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0' />
        </svg>
        <p>increment</p>
      </button>
    </div>
  );
};

export default Button;
