import {
  BookmarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from '@heroicons/react/solid';
import React, { useState } from 'react';
import Person from '../shared/Person';

const Sidebar = () => {
  const [toggleSidebar, setToogleSidebar] = useState(false);

  return (
    <aside className='basis-[40%] lg:basis-[30%] '>
      <div className='bg-mainWhite divide-y lg:rounded-xl border '>
        <div>
          <img
            src='https://thumbs.dreamstime.com/b/black-noise-white-background-black-noise-white-background-dark-texture-dots-granules-148433047.jpg'
            alt='background'
            className='w-full h-[5rem] object-cover lg:rounded-t-xl '
          />
          <div className='mx-auto flex flex-col bottom-8 justify-between gap-2 items-center px-6 cursor-pointer relative '>
            <Person
              className='flex-col justify-center items-center group text-center'
              style={{ height: '4rem', width: '4rem' }}
              descStyle={{ fontSize: '1rem', color: 'gray' }}
              imgClassName='h-[4rem] w-[4rem]'
            />
          </div>
        </div>

        <div
          className={
            !toggleSidebar
              ? 'md:flex hidden py-2 hover:cursor-pointer '
              : 'flex py-2 hover:cursor-pointer '
          }
        >
          <div className='w-full hover:bg-hoverBackground px-6 py-1 '>
            <div className='flex justify-between items-center text-sm'>
              <h4 className='text-mainGray '>Connections</h4>
              <p className='font-bold text-mainBlue text-sm'>300</p>
            </div>
            <p className='text-sm text-mainGray font-bold'>Grow your network</p>
          </div>
        </div>
        <div className=' hidden md:flex  py-2 hover:cursor-pointer'>
          <div className='w-full hover:hoverBackground px-6 py-1 '>
            <div className='flex justify-flex-start items-center text-sm gap-1'>
              <BookmarkIcon className='h-7' />
              <p className='font-bold text-mainGrey text-sm'>My Items</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          !toggleSidebar
            ? 'mt-5 hidden md:flex flex-col rounded-lg bg-mainWhite divide-y border'
            : 'flex mt-5 flex-col rounded-lg bg-mainWhite divide-y border'
        }
      >
        <div className='flex items-center justify-between px-6 py-3 hover:cursor-pointer '>
          <div className='flex flex-col gap-3 text-sm text-mainBlue font-medium'>
            <p className='hover:underline'>Groups</p>
            <p className='hover:underline'>Events</p>
            <p className='hover:underline'>Followed Hashtags</p>
          </div>
          <PlusIcon className='h-10 p-1 rounded-full hover:text-mainGray hover:hoverBackground' />
        </div>
        <div className=' px-6 py-3 hover:hoverBackground text-center '>
          <button className='text-mainGray outline-none font-medium w-full'>
            Discover more
          </button>
        </div>
      </div>

      <div className='md:hidden px-6 hover:bg-[#dad8d8] py-2 mt-2  text-center rounded-2xl'>
        <button
          className='text-[#4c4c4c] outline-none font-medium w-full flex items-center justify-center '
          onClick={() => setToogleSidebar(!toggleSidebar)}
        >
          {toggleSidebar ? (
            <>
              <span>Show Less</span>
              <div className='text-[#4c4c4c]'>
                <ChevronUpIcon />
              </div>
            </>
          ) : (
            <>
              <span>Show More</span>
              <div className='text-[#4c4c4c]'>
                <ChevronDownIcon />
              </div>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
