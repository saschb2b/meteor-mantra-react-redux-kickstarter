import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Redux
import { combineReducers } from 'redux';

// Modules
import coreModule from './modules/core';
//import userModule from './modules/user';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const coreReducers = coreModule.reducer;
//const userReducers = userModule.reducer;

// Combine Reducers
const reducer = combineReducers({
  ...coreReducers,
  //...userReducers,
});

console.log("coreModule Reducer");
console.log(coreModule.reducer);

console.log("combined reducer");
console.log(reducer);

// Init Context
const context = initContext({ reducer });

console.log("context");
console.log(context);

// Create App
const app = createApp(context);
app.loadModule(coreModule);
// app.loadModule(userModule);
app.init();
