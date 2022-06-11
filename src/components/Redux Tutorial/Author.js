import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const Author = ({ userId }) => {
  const user = useSelector(selectUser);

  const author = user.find((item) => item.id == userId);

  return (
    <>
      <span>by {author ? author.name : 'unknown author'}</span>
    </>
  );
};

export default Author;
