import { createRoot } from 'react-dom/client';
import { AppRouter } from '@router/index';
import { RouterProvider } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={AppRouter} />
);
