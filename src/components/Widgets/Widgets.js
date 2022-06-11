import { InformationCircleIcon } from '@heroicons/react/solid';
import WidgetsInfo from './WidgetsInfo';

const Sidebar = () => {
  return (
    <aside className='lg:basis-[26%]'>
      <div className='w-full bg-mainWhite lg:rounded-xl border flex'>
        <div className='w-full mx-auto flex flex-col justify-between gap-6 p-5 cursor-pointer '>
          <div className='flex justify-between gap-1 cursor-pointer'>
            <h2 className='font-medium text-[1.1rem]'>Add to your feed</h2>
            <InformationCircleIcon className='h-6 text-black' />
          </div>
          <WidgetsInfo />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
