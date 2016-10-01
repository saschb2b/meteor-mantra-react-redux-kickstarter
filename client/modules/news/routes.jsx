import React from 'react'
import { mount } from 'react-mounter'
import { MainLayout } from '../core/components/MainLayout'
import { DefaultToolbar } from '../core/components/DefaultToolbar'
import { NewsOverview } from './components/NewsOverview'
import { NewsDetailPage } from './components/NewsDetailPage'

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout)
  const NewsOverviewCtx = injectDeps(NewsOverview)

  const baseRoute = '/news'

  const newsRoutes = FlowRouter.group({
    prefix: '/news',
    name: 'news'
  })

  newsRoutes.route('/', {
    action() {
      mount(MainLayoutCtx, {
        toolbar: <DefaultToolbar title="News" />,
        content: <NewsOverviewCtx />
      })
    }
  })

  newsRoutes.route('/:id', {
    action(params) {
      mount(MainLayoutCtx, {
        toolbar: <DefaultToolbar title="NewsDetail" redirect={baseRoute} />,
        content: <NewsDetailPage id={params.id} />
      })
    }
  })
}
