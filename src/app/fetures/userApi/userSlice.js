import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUserByEmail: builder.query({
      query: (email) => ({
        url: `user/${email}`,
      }),
      providesTags: ["Users"],
    }),

    addProfileOrCoverPhotoOrInfo: builder.mutation({
      query: (profileInfo) => ({
        url: `user/${profileInfo?.email}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: profileInfo,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useAddProfileOrCoverPhotoOrInfoMutation,
} = usersApi;
