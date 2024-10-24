import { FC } from 'react';
import './_style.scss';
import { Outlet } from 'react-router';
import { Aside, Header } from '@/components';

export const Dashboard: FC = () => {
  return (
    <>
      <main>
        <Aside />
        <section className="wrapper">
          <Header />
          <section id="route">
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};

{
  /* <h1>Dashboard</h1>
   */
}
