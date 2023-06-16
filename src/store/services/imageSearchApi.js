import { createApi } from "@reduxjs/toolkit/query/react";
import { baseURL } from "constants/url";
import { axiosBaseQuery } from "store/baseQueries/axiosBaseQuery";

export const imageSearchApi = createApi({
  reducerPath: "imageSearchApi",
  baseQuery: axiosBaseQuery({
    baseUrl: baseURL,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }),
  endpoints: (build) => ({
    searchImage: build.mutation({
      query: (body) => ({
        url: `search/image/`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useSearchImageMutation } = imageSearchApi;
