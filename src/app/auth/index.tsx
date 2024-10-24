import { FC } from 'react';
import './_style.scss';
import { Outlet } from 'react-router';

export const AuthLayout: FC = () => {
  return (
    <>
      <h1>AuthLayout</h1>
      <ul>
        <li>
          <a href="/">Statistics</a>
        </li>
        <li>
          <a href="/order-canceled">Order Canceleed</a>
        </li>
        <li>
          <a href="/order-completed">Order Completed</a>
        </li>
        <li>
          <a href="/orders-new">Orders New</a>
        </li>
        <li>
          <a href="/login">Sign In</a>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
