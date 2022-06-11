import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { auth, db } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDoc, doc, setDoc, serverTimestamp } from 'firebase/firestore';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        toast('Logged in successful');
        navigate('/feed');
        setLoading(false);
      }
    } catch (error) {
      toast.error('Incorect User Credentials');
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast('Logged in successful');
      navigate('/feed');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='w-full flex flex-col items-stretch h-full  md:gap-10'>
      <div className='self-start m-4'>
        <img
          src='https://assets.website-files.com/5d12843f0779130d76476845/621fae8ec3b03c59f3a3e875_Linkedin-logo-png.png'
          alt=''
          className='h-6 md:h-10 '
        />
      </div>

      <div className='max-w-lg self-center flex flex-col gap-4 px-6 py-3  '>
        <h2 className='text-center text-[1.1rem] md:text-[1.3rem] '>
          Make the most of your professional life
        </h2>
        <div className='w-full p-4 flex flex-col bg-mainWhite shadow-lg md:shadow-xl rounded-lg text-[.7rem] md:text-[1rem] gap-4'>
          <form className='w-full flex flex-col gap-5 '>
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
              {loading ? <p className='font-bold'>Logging in...</p> : 'Login'}
            </button>
          </form>
          <div className='flex items-center gap-4'>
            <span className='w-full h-px bg-lightGray'></span>
            <span className=''>or</span>
            <span className='w-full h-px bg-lightGray'></span>
          </div>
          <button
            type='submit'
            className='flex items-center gap-1 justify-center bg-mainWhite border border-lightGray p-2 rounded-full hover:bg-hoverBackground '
            onClick={handleGoogleAuth}
          >
            <img
              src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
              alt='google'
              className='h-5'
            />
            <span className='font-medium'>Continue with Google</span>
          </button>
          <p className='text-center'>
            New to LinkedIn?
            <span className='hover:underline text-mainBlue cursor-pointer px-1 font-medium '>
              <Link to='/register'>Join now</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
