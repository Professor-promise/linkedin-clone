import React from 'react';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { XIcon } from '@heroicons/react/outline';
import { PencilIcon } from '@heroicons/react/solid';

const BasicModal = ({
  open,
  closeModal,
  changeProfile,
  photoURL,
  handleImageChange,
  loading,
  image,
}) => {
  return (
    <div
      open={open}
      className='z-50 bg-[#d0d2d2f9]  w-[100%] h-[100%] fixed left-0 right-0 top-0'
    >
      <div className='w-[100%] h-[100%] bg-mainWhite flex p-4  justify-center md:max-w-[50%] md:max-h-[50%] md:fixed md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] rounded-md'>
        <div className='w-full flex flex-col items-center gap-20 md:gap-0'>
          <div className='w-full px-2 flex justify-between items-center'>
            <p className='text-mainBlue font-bold'>Profile Photo</p>
            <XIcon
              className='close cursor-pointer text-black font-bold h-8'
              onClick={closeModal}
            />
          </div>
          <div className='flex flex-col gap-6 items-center justify-center py-4'>
            <div className='flex items-end'>
              <Avatar className='h-[10rem] w-[10rem]' src={photoURL} />
              <label htmlFor='upload-image'>
                <input
                  type='file'
                  accept='image/*'
                  id='upload-image'
                  className='hidden'
                  onChange={changeProfile}
                />
                <PencilIcon className='cursor-pointer h-7 ml-[-2.2rem] rotate-2 ' />
              </label>
            </div>
            <Button
              className={
                loading || !image
                  ? 'bg-lightGray  font-bold'
                  : 'bg-mainBlue text-mainWhite font-bold'
              }
              component='span'
              onClick={handleImageChange}
              disabled={loading || !image}
            >
              {loading ? (
                <div className='flex items-center justify-center  border-mainGray'>
                  <div className='spinner '></div>
                </div>
              ) : (
                'Upload'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
