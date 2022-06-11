import React from 'react';
import { headerIcons } from '../shared/data';
import { Link } from 'react-router-dom';

const HeaderIcons = () => {
  return (
    <>
      {headerIcons?.map((item) => {
        const { Icon, text, path } = item;
        return (
          <Link to={path} key={item.id} className='flex flex-col items-center'>
            <span>{Icon}</span>
            <p className='text-sm hidden md:block'>{text}</p>
          </Link>
        );
      })}
    </>
  );
};

export default HeaderIcons;
