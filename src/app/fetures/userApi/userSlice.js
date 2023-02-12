import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `users`,
      }),
      providesTags: ["Users"],
    }),
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

    addFriend: builder.mutation({
      query: (sender) => ({
        url: `addFriend/${sender.receiverId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: sender,
      }),
      invalidatesTags: ["Users"],
    }),

    acceptRequest: builder.mutation({
      query: (sender) => ({
        url: `accept/${sender.receiverId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: sender,
      }),
      invalidatesTags: ["Users"],
    }),

    deleteRequest: builder.mutation({
      query: (sender) => ({
        url: `delete/${sender.receiverId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: sender,
      }),
      invalidatesTags: ["Users"],
    }),

    cancleRequest: builder.mutation({
      query: (sender) => ({
        url: `cancle/${sender.receiverId}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: sender,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useGetUserByEmailQuery,
  useAddFriendMutation,
  useAcceptRequestMutation,
  useCancleRequestMutation,
  useDeleteRequestMutation,
  useAddProfileOrCoverPhotoOrInfoMutation,
} = usersApi;
