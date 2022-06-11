import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { PencilIcon } from '@heroicons/react/solid';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { auth, db, useAuth, upload } from '../../firebaseConfig';
import Hero from '../shared/Hero';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Modal from './Modal';

const Profile = () => {
  const [data, setData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [photoURL, setPhotoURL] = useState(auth.currentUser.photoURL);
  const [editProfile, setEditProfile] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const currentUser = useAuth();

  const { name, email } = data;

  const OpenModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    window.location.reload(false);
  };

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }

      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, { name });
    } catch (error) {
      toast.error('Could not update profile details');
    }
  };

  const changeProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPhotoURL(URL.createObjectURL(file));
    }
  };

  const handleImageChange = () => {
    upload(image, currentUser, setLoading);
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  return (
    <div className='basis-[72%]'>
      {open && (
        <Modal
          open={open}
          setOpen={setOpen}
          changeProfile={changeProfile}
          closeModal={closeModal}
          handleImageChange={handleImageChange}
          setPhotoURL={setPhotoURL}
          photoURL={photoURL}
          image={image}
          loading={loading}
        />
      )}
      <div className='flex bg-mainWhite rounded-2xl'>
        <div className='relative'>
          <img
            src='https://thumbs.dreamstime.com/b/black-noise-white-background-black-noise-white-background-dark-texture-dots-granules-148433047.jpg'
            alt='background'
            className='w-[100vw] h-[6rem] md:h-[10rem] object-cover rounded-t-2xl'
          />
          <div className='w-full p-6 absolute top-[0rem] md:top-[2rem]'>
            <div className='flex items-center justify-between'>
              <label className='profile__img' htmlFor='upload'>
                <Hero
                  imgClassName='h-[90px] w-[90px] md:h-[9.2rem] md:w-[9.2rem]'
                  className='h-[100px] w-[100px] md:h-[10rem] md:w-[10rem] border-[.4rem] border-mainWhite shadow-md text-6xl cursor-pointer'
                  photoURL={photoURL}
                />
                <button className='editProfile__img' onClick={OpenModal}>
                  <PhotoCameraIcon />
                </button>
              </label>
              {/* <div className=''>
                <input
                  type='file'
                  accept='image/*'
                  id='upload'
                  className=''
                  onChange={changeProfile}
                />
              </div>
              <button
                className='block text-2xl ml-48'
                onClick={handleImageChange}
                disabled={loading || !image}
              >
                Submit
              </button> */}

              <PencilIcon
                className='h-8 cursor-pointer mt-8 md:mt-[5.5rem]'
                onClick={() => {
                  editProfile && onSubmit();
                  setEditProfile((prevState) => !prevState);
                }}
              />
            </div>
          </div>
          <div className='mt-[4.5em] px-6 md:px-10 pb-6 flex flex-col gap-8'>
            <form className='flex flex-col gap-1'>
              <input
                type='text'
                id='name'
                className={
                  !editProfile
                    ? 'capitalize text-2xl md:text-3xl pt-1 bg-transparent'
                    : 'w-full capitalize border rounded-xs p-2'
                }
                disabled={!editProfile}
                value={name}
                onChange={onChange}
              />
              <input
                type='email'
                id='email'
                className={
                  !editProfile
                    ? 'text-mainGray bg-transparent'
                    : 'w-full border rounded-xs p-2'
                }
                disabled={!editProfile}
                value={email}
                onChange={onChange}
              />
            </form>
            <p className='font-[600] text-sm text-mainBlue'>200 connections</p>
            <div className='flex gap-2 items-center'>
              <button className='rounded-full bg-mainBlue text-mainWhite p-[.45rem] text-md hover:bg-hoverBlue font-medium'>
                Open to
              </button>
              <button className='rounded-full border border-mainBlue text-mainBlue p-[.45rem] font-medium hover:bg-blue-200 hover:text-hoverBlue'>
                Add profile section
              </button>

              <DotsHorizontalIcon className='h-9 rounded-full border-[.1rem] text-mainBlue hover:text-mainGray cursor-pointer border-mainGray p-[.45rem] hover:bg-hoverBackground' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
