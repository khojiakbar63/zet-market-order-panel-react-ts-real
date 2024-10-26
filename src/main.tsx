import { createRoot } from 'react-dom/client';
import { AppRouter } from '@router/index';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { globalThemeConfig } from '@theme/index'; // 引入全局主题配置
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalThemeConfig}>
    <RouterProvider router={AppRouter} />
  </ConfigProvider>
);
