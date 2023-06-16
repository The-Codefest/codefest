import { tokens } from "./tokens";

const isLoggedIn = () => {
  return tokens.getAccessToken() ? true : false;
};

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  return JSON.parse(`${localStorage.getItem("user")}`);
};

const clearUser = () => {
  localStorage.removeItem("user");
};

const clearAuthCredentials = () => {
  clearUser();
  tokens.clearAccessToken();
};

const logOut = () => {
  window.localStorage.setItem("logout", String(Date.now()));

  clearAuthCredentials();
};

export const user = {
  isLoggedIn,
  setUser,
  getUser,
  clearUser,
  clearAuthCredentials,
  logOut,
};
