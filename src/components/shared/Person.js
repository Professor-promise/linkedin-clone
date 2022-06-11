import React, { useState } from 'react';
import Hero from './Hero';
import { db, auth } from '../../firebaseConfig';
import { updateDoc, doc } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Person = ({ className, style, descStyle, titleStyle, imgClassName }) => {
  const [data, setData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const photoURL = auth.currentUser.photoURL;

  const { name, email } = data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    const userRef = doc(db, 'users', auth.currentUser.uid);
    await updateDoc(userRef, { name });
  };

  return (
    <div className={`${className} flex items-start gap-2 cursor-pointer`}>
      <Link to='/profile'>
        <Hero style={style} imgClassName={imgClassName} photoURL={photoURL} />
      </Link>
      <form className='flex flex-col' onSubmit={onSubmit}>
        <h2
          className='font-medium text-[1.1rem] capitalize group-hover:underline'
          style={titleStyle}
        >
          {name}
        </h2>

        <p className='text-[0.8rem]' style={descStyle}>
          {email}
        </p>
      </form>
    </div>
  );
};

export default Person;
