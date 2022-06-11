import { ArrowRightIcon, PlusIcon } from '@heroicons/react/solid';
import React from 'react';
import { widgetsInfo } from '../shared/data';

const WidgetsInfo = () => {
  return (
    <div className='flex flex-col gap-6'>
      {widgetsInfo?.map(({ img, id, name, desc }) => (
        <section key={id} className='w-full flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='h-12 w-[3rem]'>
              <img
                src={img}
                alt={desc}
                className='object-contain rounded-full'
              />
            </div>
            <div className=''>
              <div>
                <h3 className='font-medium'>{name}</h3>
                <p className='text-sm text-mainGray'>{desc}</p>
              </div>
              <button className='mt-2 w-[7rem] flex items-center justify-center gap-1 border hover:border-2 hover:bg-hoverBackground border-mainGray rounded-3xl py-2 px-2'>
                <PlusIcon className='h-6 ' />
                <span className='font-medium text-mainGray text-[1.01rem]'>
                  Follow
                </span>
              </button>
            </div>
          </div>
        </section>
      ))}
      <div className='flex items-center  '>
        <div className='hover:bg-hoverBackground flex gap-1 items-center p-1 rounded-lg text-mainGray'>
          <p className='font-medium'>View all recommendations</p>
          <ArrowRightIcon className='h-5 text-mainGray font-medium' />
        </div>
      </div>
    </div>
  );
};

export default WidgetsInfo;
