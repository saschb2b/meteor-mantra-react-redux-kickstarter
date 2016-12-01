import { createApp } from 'mantra-core'
import { combineReducers } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import initContext from './configs/context'

injectTapEventPlugin()

// Modules
import coreModule from './modules/core'
import homeModule from './modules/home'
import newsModule from './modules/news'


const coreReducers = coreModule.reducer
const newsReducers = newsModule.reducer

// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  ...newsReducers
})

// Init Context
const context = initContext({ reducer })

// Create App
const app = createApp(context)
app.loadModule(coreModule)
app.loadModule(homeModule)
app.loadModule(newsModule)
app.init()
