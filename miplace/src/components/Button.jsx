import React from 'react';

function Button({ text, onClick }) {
  return (
    <button 
    className='w-[9.375rem] h-[3rem] bg-[#1E91B6] text-white rounded-lg'
    onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;