const SET_USER = 'SET_USER';
const MENU_TOGGLE = 'MENU_TOGGLE';
const SNACKBAR_TOGGLE = 'SNACKBAR_TOGGLE';

export function user(state = { user: null }, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
}

export function menu(state = { menuOpen: false }, action) {
  console.log("toggle menu reducer");
  console.log(action);
  console.log(state);
  switch (action.type) {
    case MENU_TOGGLE:
      return Object.assign({}, state, { menuOpen: typeof action.open === 'undefined' ? !state.menuOpen : action.open });
    default:
      return state;
  }
}

export function snackbar(state = { snackbarOpen: false }, action) {
  switch (action.type) {
    case SNACKBAR_TOGGLE:
      return Object.assign({}, state, { snackbarOpen: typeof action.open === 'undefined' ? !state.snackbarOpen : action.open });
    default:
      return state;
  }
}