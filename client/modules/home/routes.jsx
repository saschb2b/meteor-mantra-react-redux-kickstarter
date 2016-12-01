import React from 'react'
import { mount } from 'react-mounter'
import { MainLayout } from '../core/components/MainLayout'
import { Home } from './components/Home'

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
