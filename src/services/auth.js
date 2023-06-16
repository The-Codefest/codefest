import { API } from "./api";
import { resolvePromise } from "../utils/resolvePromise";

export const login = async (email, password) =>
  await resolvePromise(
    API.post("/user/login/", { emailAddress: email, password }).then(
      (res) => res?.data
    )
  );

export const refreshToken = async (oldRefreshToken) =>
  await resolvePromise(
    API.post("/token/refresh/", { refresh: oldRefreshToken }).then(
      (res) => res?.data
    )
  );
