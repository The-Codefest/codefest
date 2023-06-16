import { results } from "constants/results";
import { API } from "./api";

export const getSearchResults = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (!error) {
        resolve(results);
      } else {
        reject(new Error("Couldn't load data"));
      }
    }, 2000);
  });
};

export const uploadUserImage = async (userImageFile) => {
  try {
    const response = await API.post(
      "/search/image/",
      { blob: userImageFile, image_type: userImageFile.type },
      {
        headers: { "Content-Type": "/multipart/form-data" },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
