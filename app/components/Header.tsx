import React from 'react'
import Search from './Search';

const Header = () => {
  return (
    <div className=" flex flex-col h-full py-5 justify-center items-center text-center text-white">
      <h1 className='text-4xl font-bold mb-4 '>Find Your Books Here</h1>
      <p className='text-lg max-w-md'>
        Reading has become one of the very best thongs i love to do, let's make
        reading fun by tracking our reading and finding books easily, cheers to
        reading 🥂
      </p>
      <Search/>
    </div>
  );
}

export default Header
