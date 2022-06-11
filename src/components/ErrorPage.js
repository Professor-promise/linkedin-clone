import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/404_image.svg';

const ErrorPage = () => {
  return (
    <div className='flex gap-[5rem] flex-col items-stretch '>
      <div className='bg-mainWhite p-4 shadow-sm'>
        <Link to='/'>
          <img
            src='https://assets.website-files.com/5d12843f0779130d76476845/621fae8ec3b03c59f3a3e875_Linkedin-logo-png.png'
            alt='linkedin'
            className='h-7 ml-[4rem]'
          />
        </Link>
      </div>
      <div className='self-center text-center flex flex-col gap-2 px-4'>
        <img src={image} alt='404' className='h-[13rem] md:h-[23rem]' />
        <h2 className='text-[1.2rem] md:text-[1.5rem]'>
          This page doesn’t exist
        </h2>
        <p className='text-[1rem] md:text-[1.1rem]'>
          Please check your URL or return to LinkedIn home.
        </p>
        <Link to='/feed'>
          <button className='rounded-full font-bold hover:text-mainWhite border border-mainBlue text-mainBlue w-[10rem] py-[.3rem] hover:bg-hoverBlue'>
            Go to your feed
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
