import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Posts", "ProfilePosts"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
      }),
      providesTags: ["Posts"],
    }),

    getPostByEmail: builder.query({
      query: (email) => ({
        url: `posts/${email}`,
      }),
      providesTags: ["ProfilePosts"],
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
      invalidatesTags: ["Posts", "ProfilePosts"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfilePosts"],
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
      invalidatesTags: ["Posts", "ProfilePosts"],
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
      invalidatesTags: ["Posts", "ProfilePosts"],
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
      invalidatesTags: ["Posts", "ProfilePosts"],
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByEmailQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useAddCommentMutation,
  useAddReactMutation,
  useRemoveReactMutation,
} = postsApi;
