import { SET_USER, MENU_TOGGLE, SNACKBAR_TOGGLE } from './actionTypes.js'

export function setUser(user) {
  return { type: SET_USER, user }
}
export default function toggleMenu(open) {
  return { type: MENU_TOGGLE, open }
}
export function toggleSnackbar(open) {
  return { type: SNACKBAR_TOGGLE, open }
}
