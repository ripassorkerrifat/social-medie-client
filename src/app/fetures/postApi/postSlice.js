import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
      }),
      providesTags: ["Posts"],
    }),

    addPost: builder.mutation({
      query: (post) => ({
        url: "post",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetAllPostQuery, useAddPostMutation } = postsApi;
