import jwt_decode from "jwt-decode";
import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

ls.config.encrypt = false;
ls.config.secret = process.env.REACT_APP_ENCRYPTION_SECRET_KEY;

// update encrypter to use AES encryption
ls.config.encrypter = (data, secret) =>
  AES.encrypt(JSON.stringify(data), secret).toString();

// update decrypter to decrypt AES-encrypted data
ls.config.decrypter = (data, secret) => {
  try {
    return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
  } catch (e) {
    // incorrect/missing secret, return the encrypted data instead
    return data;
  }
};

export const tokens = {
  setAccessToken(token) {
    sessionStorage.setItem("accessToken", token);
  },

  getAccessToken() {
    return sessionStorage.getItem("accessToken");
  },

  clearAccessToken() {
    sessionStorage.removeItem("accessToken");
  },

  setRefreshToken(token) {
    ls.set("refreshToken", token, { encrypt: true });
  },

  getRefreshToken() {
    return ls.get("refreshToken", { decrypt: true });
  },

  clearRefreshToken() {
    sessionStorage.removeItem("refreshToken");
  },

  decodeToken(token) {
    return jwt_decode(token);
  },
};
