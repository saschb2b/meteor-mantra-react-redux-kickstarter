import { SET_USER, MENU_TOGGLE, SNACKBAR_TOGGLE } from '../actions/actionTypes'

export function user(state = { user: null }, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user })
    default:
      return state
  }
}

export function menu(state = { menuOpen: false }, action) {
  switch (action.type) {
    case MENU_TOGGLE:
      return Object.assign({}, state, { menuOpen: typeof action.open === 'undefined' ? !state.menuOpen : action.open })
    default:
      return state
  }
}

export function snackbar(state = { snackbarOpen: false }, action) {
  switch (action.type) {
    case SNACKBAR_TOGGLE:
      return Object.assign({}, state, { snackbarOpen: typeof action.open === 'undefined' ? !state.snackbarOpen : action.open })
    default:
      return state
  }
}
