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



import { MdOutlineWidgets } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import { MdFreeCancellation } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";


export const StatData = [
  {
    title: 'New Orders',
    number: 234,
    icon: <MdOutlineWidgets />,
    color: '#4379F2'
  },
  {
    title: 'Completed Orders',
    number: 446,
    icon: <IoIosDoneAll />,
    color: '#06D001'
  },
  {
    title: 'Cancelled Orders',
    number: 26,
    icon: <MdFreeCancellation />,
    color: '#FF7777'
  },
  {
    title: 'Employees',
    number: 52,
    icon: <SiGoogleads />,
    color: '#6295A2'
  },
  
];