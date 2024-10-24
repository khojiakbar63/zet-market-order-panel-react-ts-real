import { TbAppsFilled } from 'react-icons/tb';
import { MdOutlineNewLabel } from 'react-icons/md';
import { AiOutlineFileDone } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { HiUsers } from 'react-icons/hi2';

import { TnavigationType } from '@ttypes/index';

export const navigation: TnavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: <TbAppsFilled />,
    role: ['admin', 'employee'],
  },
  {
    path: '/orders-new',
    title: 'New Orders',
    icon: <MdOutlineNewLabel />,
    role: ['admin', 'employee'],
  },
  {
    path: '/order-completed',
    title: 'Completed Orders',
    icon: <AiOutlineFileDone />,
    role: ['admin'],
  },
  {
    path: '/order-canceled',
    title: 'Canceled Orders',
    icon: <ImCancelCircle />,
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: <HiUsers />,
    role: ['admin', 'employee'],
  },
];
