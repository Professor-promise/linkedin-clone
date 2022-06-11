import React, { useState } from 'react';
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid';
import HeaderIcons from './HeaderIcons';
import DropDown from './DropDown';
import Hero from '../shared/Hero';
import { auth } from '../../firebaseConfig';

const Header = () => {
  const [toggleSearchIcon, setToogleSearchIcon] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const photoURL = auth.currentUser.photoURL;

  return (
    <div className='max-w-full fixed left-0 right-0 top-0 bg-mainWhite shadow-md z-40 border-b'>
      <div className='mx-auto flex md:max-w-3xl lg:max-w-[80%] justify-between gap-2 items-center py-2 px-6 cursor-pointer relative'>
        <div className='flex items-center md:justify-around lg:justify-start gap-5 sm:gap-2 flex-1'>
          <img
            src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
            alt='logo'
            className='h-8'
          />

          {!toggleSearchIcon ? (
            <div className='flex flex-col items-center justify-center '>
              <SearchIcon
                className='h-7 md:h-8 cursor-pointer text-[#858585] lg:hidden  '
                onClick={() => setToogleSearchIcon(!toggleSearchIcon)}
              />
              <p className='hidden md:block lg:hidden text-sm'>Search</p>
            </div>
          ) : (
            <div className=' w-full flex items-center bg-lightGray p-1 rounded-[.25rem] gap-1 flex-grow lg:hidden'>
              <>
                <SearchIcon
                  className='h-6 text-mainGray mr-2'
                  onClick={() => setToogleSearchIcon(!toggleSearchIcon)}
                />
                <input
                  type='text'
                  placeholder='search...'
                  className='w-full bg-transparent flex-grow outline-none '
                />
              </>
            </div>
          )}
          <div className='w-80 hidden lg:flex justify-start items-center bg-lightGray p-1.5 text-lg rounded-[.25rem] gap-1'>
            <>
              <SearchIcon className='h-5 text-mainGray' />
              <input
                type='text'
                placeholder='search...'
                className='w-full bg-transparent flex-grow outline-none '
              />
            </>
          </div>
        </div>
        {!toggleSearchIcon && (
          <div className='flex items-center gap-4 md:gap-10 '>
            <HeaderIcons />
            <div
              className='flex flex-col items-start'
              onClick={() => setToggleDropDown(!toggleDropDown)}
            >
              <Hero imgClassName='h-[2.9rem] w-[2.9rem]' photoURL={photoURL} />
              <div className='lg:flex  hidden justify-center items-center'>
                <p className='text-sm'>Me</p>
                <span>
                  <ChevronDownIcon className='h-5 text-mainGray ' />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='absolute px-6 top-[4rem] right-[2px] sm:right-[6rem] md:right-[9rem] sm:top-[3rem] md:top-[5.5rem]'>
        {toggleDropDown && <DropDown />}
      </div>
    </div>
  );
};

export default Header;
