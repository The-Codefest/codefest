import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "store/baseQueries/axiosBaseQuery";
import { baseURL } from "constants/url";
import { capitalizeFirstLetter } from "utils/format";

export const reportApi = createApi({
  reducerPath: "reportApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  keepUnusedDataFor: 5 * 60,
  endpoints: (build) => ({
    searchReport: build.query({
      query: () => ({ url: "/dashboard/report/search/", method: "GET" }),
      transformResponse: (response, meta, arg) => {
        return response?.data?.map((record) => ({
          ...record,
          full_name_of_user: capitalizeFirstLetter(record?.full_name_of_user),
        }));
      },
      transformErrorResponse: (response, meta, arg) => response?.data,
    }),
    userReport: build.query({
      query: () => ({ url: "/dashboard/report/user/", method: "GET" }),
      transformResponse: (response, meta, arg) => {
        return response?.data?.map((user) => ({
          ...user,
          firstName: capitalizeFirstLetter(user.firstName),
          lastName: capitalizeFirstLetter(user.lastName),
        }));
      },
      transformErrorResponse: (response, meta, arg) => response?.data,
    }),
    scrapingReport: build.query({
      keepUnusedDataFor: 30 * 60,
      query: () => ({ url: "/dashboard/report/scraping/", method: "GET" }),
      transformResponse: (response, meta, arg) => response?.data,
      transformErrorResponse: (response, meta, arg) => response?.data,
    }),
  }),
});

export const {
  useSearchReportQuery,
  useUserReportQuery,
  useScrapingReportQuery,
} = reportApi;
