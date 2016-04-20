const SET_USER = 'SET_USER';
const MENU_TOGGLE = 'MENU_TOGGLE';
const SNACKBAR_TOGGLE = 'SNACKBAR_TOGGLE';

export const post = {
  setUser(user) {
    return { type: SET_USER, user };
  },
  toggleMenu(open) {
    console.log("togglemenu action");
    console.log(open);
    return { type: MENU_TOGGLE, open };
  },
  toggleSnackbar(open) {
    return { type: SNACKBAR_TOGGLE, open };
  },
};
