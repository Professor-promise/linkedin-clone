import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebaseConfig';
import { toast } from 'react-toastify';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentail = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentail.user;
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const dataCopy = { ...data };
      delete dataCopy.password;
      dataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), dataCopy);

      navigate('/feed');
    } catch (error) {
      if (!name) {
        toast.error('Please enter your full name');
      } else {
        toast.error('Something went wrong with registration');
      }
    }
  };

  return (
    <div className='w-full flex flex-col items-center justify-center md:items-stretch h-full md:gap-10'>
      <div className='md:self-start m-4'>
        <img
          src='https://assets.website-files.com/5d12843f0779130d76476845/621fae8ec3b03c59f3a3e875_Linkedin-logo-png.png'
          alt=''
          className='h-6 md:h-10 '
        />
      </div>

      <div className='max-w-lg md:self-center flex flex-col gap-4 px-6 py-3  '>
        <h2 className='text-center text-[1.1rem] md:text-[1.3rem] '>
          Make the most of your professional life
        </h2>
        <div className='w-full p-4 flex flex-col bg-mainWhite shadow-lg md:shadow-xl rounded-lg text-[.7rem] md:text-[1rem] gap-4'>
          <form className='w-full flex flex-col gap-5 '>
            <div className='flex flex-col '>
              <label htmlFor='name' className='text-mainGray '>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={onChange}
                className='border border-black rounded-[.25rem] p-1 outline-none '
              />
            </div>
            <div className='flex  flex-col '>
              <label htmlFor='email' className='text-mainGray '>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={onChange}
                className='border border-black rounded-[.25rem] p-1 outline-none '
              />
            </div>
            <div className='flex relative  flex-col'>
              <label htmlFor='password' className='text-mainGray'>
                Password (6 or more characters)
              </label>
              <input
                type={!showPassword ? 'password' : 'text'}
                id='password'
                value={password}
                onChange={onChange}
                className=' border border-black rounded-[.25rem] p-1 outline-none '
              />
              <span
                className='absolute text-xs md:text-sm right-1.5 hover:underline bottom-2 cursor-pointer'
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? 'Show' : 'Hide'}
              </span>
            </div>
            <p className=' text-mainGray leading-3 md:leading-6 px-1 text-center'>
              By clicking Agree & Join, you agree to the LinkedIn
              <span className='hover:underline text-mainBlue cursor-pointer px-1'>
                User Agreement,
              </span>
              <span className='hover:underline text-mainBlue cursor-pointer px-1'>
                Privacy Policy,
              </span>
              and
              <span className='hover:underline text-mainBlue cursor-pointer px-1'>
                Cookie Policy.
              </span>
            </p>
            <button
              type='submit'
              className='bg-mainBlue text-mainWhite p-2 font-medium rounded-full hover:bg-hoverBlue'
              onClick={handleSubmit}
            >
              Agree & Join
            </button>
          </form>
          <div className='flex items-center gap-4'>
            <span className='w-full h-px bg-lightGray'></span>
            <span className=''>or</span>
            <span className='w-full h-px bg-lightGray'></span>
          </div>
          <p className='text-center'>
            Already on LinkedIn?
            <span className='hover:underline text-mainBlue cursor-pointer px-1 font-medium '>
              <Link to='/login'>Sign in</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
