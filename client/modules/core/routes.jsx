import React from 'react'
import { mount } from 'react-mounter'
import { MainLayout } from './components/MainLayout.jsx'
import { Home } from './components/Home.jsx'

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout)

  FlowRouter.route('/', {
    action() {
      mount(MainLayoutCtx, {
        content: <Home />
      })
    }
  })
}
