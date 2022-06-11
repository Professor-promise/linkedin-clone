import {
  BellIcon,
  BriefcaseIcon,
  CalendarIcon,
  HomeIcon,
  PencilAltIcon,
  PhotographIcon,
  ReplyIcon,
  ShareIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid';

import { ThumbUpIcon, ChatIcon } from '@heroicons/react/outline';

const headerIcons = [
  {
    id: 1,
    Icon: <HomeIcon />,
    text: 'Home',
    path: '/feed',
  },
  {
    id: 2,
    Icon: <UserGroupIcon />,
    text: 'My Network',
    path: '',
  },
  {
    id: 3,
    Icon: <BriefcaseIcon />,
    text: 'Jobs',
    path: '',
  },
  {
    id: 4,
    Icon: <ChatIcon />,
    text: 'Messaging',
    path: '',
  },
  {
    id: 5,
    Icon: <BellIcon />,
    text: 'Notification',
    path: '',
  },
];

const searchInputIcons = [
  {
    id: 1,
    Icon: <PhotographIcon className='text-mainBlue' />,
    text: 'Photo',
  },
  {
    id: 2,
    Icon: <VideoCameraIcon className='text-[#5F9B41]' />,
    text: 'Video',
  },
  {
    id: 3,
    Icon: <CalendarIcon className='text-[#C37D16]' />,
    text: 'Event',
  },
  {
    id: 4,
    Icon: <PencilAltIcon className='text-[#E16745]' />,
    text: 'Write Article',
  },
];

const PostsIcons = [
  {
    id: 1,
    Icon: <ThumbUpIcon className='rotate-0' />,
    text: 'Like',
  },
  {
    id: 2,
    Icon: <ChatIcon className='' />,
    text: 'Message',
  },
  {
    id: 3,
    Icon: <ReplyIcon className='' />,
    text: 'Share',
  },
  {
    id: 4,
    Icon: <ShareIcon className='' />,
    text: 'Send',
  },
];

const widgetsInfo = [
  {
    id: 1,
    name: 'Punch Newspapers',
    img: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEpDYgUJVvztg/company-logo_100_100/0/1578583020585?e=1661990400&v=beta&t=GccpDUU527bqx9P9Pg459p8RBG6RFqm3CXVvs2dfspc',
    desc: 'Company • Newspapers',
  },
  {
    id: 2,
    name: 'Rita Orji, PhD',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQFduj8EuWE1lg/profile-displayphoto-shrink_100_100/0/1540422139914?e=1660176000&v=beta&t=B9wd7-N5ixLpYKMZI_cKiXaXZvW0rftD0lDN4HL86LM',
    desc: 'Prof. of Computer Sci🔹Canada Research Chair',
  },
  {
    id: 3,
    name: 'Emmanuel Michael, SPHRI',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQE_ovVzRXYm9Q/profile-displayphoto-shrink_100_100/0/1609428806681?e=1659571200&v=beta&t=pEgOkBucq8u2MkqfsfTuYgACb29-mCOiPRaJCgy0E58',
    desc: '100 Most Influential Global HR Leader.',
  },
];

export { headerIcons, searchInputIcons, PostsIcons, widgetsInfo };
