import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Redux
import { combineReducers } from 'redux';

// Modules
import coreModule from './modules/core';
import newsModule from './modules/news';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const coreReducers = coreModule.reducer;
const newsReducers = newsModule.reducer;

// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  ...newsReducers,
});

// Init Context
const context = initContext({ reducer });

// Create App
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(newsModule);
app.init();
