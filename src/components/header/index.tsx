import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';

import './_style.scss';

const index: FC = () => {
  return (
    <header>
      <div className="search">
        <input id='search' className='input' type="text" placeholder="Search new order" />
        <label htmlFor='search'>
          <CiSearch />
        </label>
      </div>
    </header>
  );
};

export default index;
