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

    addComment: builder.mutation({
      query: (commemt) => ({
        url: `comment/${commemt.id}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: commemt,
      }),
      invalidatesTags: ["Posts"],
    }),

    addReact: builder.mutation({
      query: (react) => ({
        url: `react/${react.id}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: react,
      }),
      invalidatesTags: ["Posts"],
    }),

    removeReact: builder.mutation({
      query: (react) => ({
        url: `delete/${react.id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: react,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useAddPostMutation,
  useAddCommentMutation,
  useAddReactMutation,
  useRemoveReactMutation,
} = postsApi;
