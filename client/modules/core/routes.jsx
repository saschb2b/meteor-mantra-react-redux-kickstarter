import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from './components/MainLayout.jsx';
import { DefaultToolbar } from './components/DefaultToolbar.jsx';
import { Home } from './components/Home.jsx';
import { NewsOverview } from './components/NewsOverview.jsx';
import { NewsDetailPage } from './components/NewsDetailPage.jsx';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    action() {
      mount(MainLayoutCtx, {
        content: <Home />,
      });
    },
  });

  FlowRouter.route('/news', {
    action() {
      mount(MainLayoutCtx, {
        toolbar: <DefaultToolbar title="News" />,
        content: <NewsOverview />,
      });
    },
  });

  FlowRouter.route('/news/:id', {
    action() {
      mount(MainLayoutCtx, {
        toolbar: <DefaultToolbar title="NewsDetail" />,
        content: <NewsDetailPage />,
      });
    },
  });
}
