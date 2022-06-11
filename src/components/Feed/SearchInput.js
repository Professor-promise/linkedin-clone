import { searchInputIcons } from '../shared/data';
import Hero from '../shared/Hero';
import { auth } from '../../firebaseConfig';

const SearchInput = ({ message, setMessage, handlePost }) => {
  const photoURL = auth.currentUser.photoURL;

  return (
    <div className='w-full bg-white border rounded-xl '>
      <div className='flex flex-col gap-4 p-6'>
        <div className='w-full flex items-center  gap-5 '>
          <div>
            <Hero imgClassName='w-[2.9rem] h-[2.9rem]' photoURL={photoURL} />
          </div>
          <form className='w-full' onSubmit={handlePost}>
            <input
              type='text'
              placeholder='Start a post'
              className='w-full font-medium p-3 bg-transparent grow outline-none border border-[#606060] rounded-full'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
        </div>
        <div className='flex justify-around flex-wrap gap-4 cursor-pointer md:gap-0'>
          {searchInputIcons?.map((items) => (
            <div
              key={items.id}
              className='flex items-center gap-2 hover:bg-hoverBackground p-2 rounded-lg'
            >
              <span>{items.Icon}</span>
              <p className='sm:text-md md:text-lg lg:text-md font-medium text-mainGray'>
                {items.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
