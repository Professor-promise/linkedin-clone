import { useState, forwardRef } from 'react';
import { PostsIcons } from '../shared/data';
import Person from '../shared/Person';

const Posts = forwardRef(({ message }, ref) => {
  const [isShow, setIsShow] = useState(false);

  const showMessage = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <div className='w-full mt-4 bg-white border rounded-xl divide-y' ref={ref}>
      <div className='flex flex-col gap-6 p-6'>
        <Person
          descStyle={{ fontSize: '0.8rem' }}
          titleStyle={{ fontSize: '1.05rem', fontWeight: 'bold' }}
          imgClassName='h-[3rem] w-[3rem]'
          className='text-mainGray'
        />
      </div>
      <div className='py-3 px-6'>
        <div className='text-[.7rem] md:text-[1rem] text-mainGray'>
          {!isShow && message.length >= 140 ? (
            <>
              {message.slice(0, 140)}
              <p
                className='text-mainGray text-[1rem] cursor-pointer text-right hover:underline hover:text-mainBlue'
                onClick={showMessage}
              >
                ...see more
              </p>
            </>
          ) : (
            message
          )}
        </div>
      </div>
      <div className='py-3 flex items-center justify-around'>
        {PostsIcons?.map((item) => (
          <div
            key={item.id}
            className='flex items-center gap-1 md:gap-2 hover:bg-hoverBackground md:px-6 py-3 hover:rounded-lg font-medium text-mainGray  cursor-pointer'
          >
            <span>{item.Icon}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Posts;
