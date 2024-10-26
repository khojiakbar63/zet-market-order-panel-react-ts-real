import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { checkRole } from '@/utils/index';
import { navigation } from '@/constants/index.data';
import type { TnavigationType } from '@/types';
import { PopConfirm } from '../ui';
import './_style.scss';

const index: FC = () => {
  let role = localStorage.getItem('role') || 'admin';
  return (
    <aside>
      <div className="logo">
        <img width={34} src="/z-logo.png" alt="logo" />
        <span className="logo-text">ZET MARKET B2B</span>
      </div>

      <ul className="list">
        {checkRole(navigation, role).map((item: TnavigationType) => (
          <li>
            <NavLink className="list-item" to={item.path}>
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="settings">
        <img className="avatar" src="/my_image.png" alt="me" />
        <p className="full-name">Abdulakhatov Khojiakbar</p>
        <PopConfirm />
      </div>
    </aside>
  );
};

export default index;
