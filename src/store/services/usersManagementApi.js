import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "store/baseQueries/axiosBaseQuery";
import { baseURL } from "constants/url";
import { capitalizeFirstLetter } from "utils/format";

export const usersManagementApi = createApi({
  reducerPath: "usersManagementApi",
  tagTypes: ["usersList"],
  keepUnusedDataFor: 5 * 60,
  baseQuery: axiosBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    getUsersList: build.query({
      query: () => ({
        url: "/dashboard/user/",
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => {
        return response?.data?.map((user) => ({
          ...user,
          fullName: capitalizeFirstLetter(
            `${user?.firstName} ${user?.lastName}`
          ),
        }));
      },
      providesTags: (result, error, id) => [{ type: "usersList", id }],
    }),
    updateUserStatus: build.mutation({
      query: (id) => ({
        url: `/dashboard/user/block/${id}/`,
        method: "PATCH",
      }),
      transformResponse: (response, meta, arg) => {
        return response?.data;
      },
      transformErrorResponse: (response, meta, arg) => response?.data,
      invalidatesTags: (result, error, { id }) => [{ type: "usersList", id }],
    }),
  }),
});

export const { useGetUsersListQuery, useUpdateUserStatusMutation } =
  usersManagementApi;
