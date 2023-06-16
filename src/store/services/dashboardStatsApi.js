import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "store/baseQueries/axiosBaseQuery";
import { baseURL } from "constants/url";

export const dashboardStatsApi = createApi({
  reducerPath: "dashboardStatsApi",
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  keepUnusedDataFor: 5 * 10,
  endpoints: (build) => ({
    getUsersAndSearchStats: build.query({
      query: () => ({ url: "/dashboard/users_and_search_data", method: "GET" }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getSearchesMadeByUsersStats: build.query({
      query: () => ({
        url: "/dashboard/searches_made_by_ru_graph_data/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        const data = response?.data;

        const transformedData = [
          ["Date", "Registered Users", "Unregistered Users"],
        ];

        // Extract all unique dates from the data object
        const uniqueDates = [
          ...new Set([
            ...data.registered_visitors.map((visitor) => visitor?.date_search),
            ...data.unregistered_visitors.map(
              (visitor) => visitor?.date_search
            ),
          ]),
        ];

        // Loop through each unique date and count the number of registered and unregistered visitors
        uniqueDates.forEach((date) => {
          const registeredCount =
            data.registered_visitors.find(
              (visitor) => visitor?.date_search === date
            )?.count || 0;

          const unregisteredCount =
            data.unregistered_visitors.find(
              (visitor) => visitor?.date_search === date
            )?.count || 0;

          transformedData.push([date, registeredCount, unregisteredCount]);
        });

        const sortedTransformedData = transformedData.slice();
        sortedTransformedData.sort((a, b) => new Date(a[0]) - new Date(b[0]));

        return sortedTransformedData;
      },
    }),
    getCountryAndDeviceStats: build.query({
      query: () => ({
        url: "/dashboard/country_device_info_data/?limit=5",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
    getMostPopularSearchSources: build.query({
      query: () => ({
        url: "/dashboard/most_popular_search_sources/?limit=10",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) =>
        response.data?.most_popular_search_sources,
    }),
    getMostIndexedWebsites: build.query({
      query: () => ({
        url: "/dashboard/most_indexed_websites/?limit=10",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) =>
        response.data?.most_indexed_websites,
    }),
    getTopCountriesBySearchMapData: build.query({
      query: () => ({
        url: "/dashboard/top_countries_by_map_search/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) =>
        response.data?.top_countries_by_search,
    }),
  }),
});

export const {
  useGetUsersAndSearchStatsQuery,
  useGetSearchesMadeByUsersStatsQuery,
  useGetCountryAndDeviceStatsQuery,
  useGetMostPopularSearchSourcesQuery,
  useGetMostIndexedWebsitesQuery,
  useGetTopCountriesBySearchMapDataQuery,
} = dashboardStatsApi;
