import React from 'react';
import { auth } from '../../firebaseConfig';
import { Avatar } from '@mui/material';

const Hero = ({ style, className, imgStyle, imgClassName, photoURL }) => {
  const name = auth.currentUser.displayName;

  return (
    <div
      className={`${className} grid h-[3rem] w-[3rem]  rounded-full place-content-center text-2xl `}
      style={style}
    >
      <Avatar
        alt='profile'
        src={photoURL}
        className={`${imgClassName}`}
        style={imgStyle}
      >
        {name?.slice(0, 1).toUpperCase()}
      </Avatar>
    </div>
  );
};

export default Hero;
