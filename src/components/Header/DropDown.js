import Person from '../shared/Person';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

const DropDown = () => {
  const dropDownContent = (content) => (
    <p className='text-[.8rem] text-[#484848] cursor-pointer hover:underline'>
      {content}
    </p>
  );

  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className='h-fit divide-y bg-white w-[18rem] rounded-lg z-40 shadow-lg'>
      <div className='flex flex-col p-4 gap-4'>
        <Person />
        <button className='border-2 border-mainBlue rounded-full text-mainBlue hover:bg-slate-100 cursor-pointer '>
          <Link to='/profile'>View Profile</Link>
        </button>
      </div>
      <div className='px-4 py-2 flex flex-col gap-1'>
        <h2 className='font-medium'>Account</h2>
        {dropDownContent('Settings & Privacy')}
        {dropDownContent('Help')}
        {dropDownContent('Language')}
      </div>
      <div className='px-4 py-2 flex flex-col gap-1'>
        <h2 className='font-medium'>Manage</h2>
        {dropDownContent('Posts & Activity')}
        {dropDownContent('Job Posting Account')}
      </div>
      <div className='px-4 py-2 flex flex-col gap-1' onClick={onLogout}>
        {dropDownContent('Sign Out')}
      </div>
    </div>
  );
};

export default DropDown;
