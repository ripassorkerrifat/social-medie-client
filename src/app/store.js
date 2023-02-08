import { configureStore } from "@reduxjs/toolkit";

import { postsApi } from "./fetures/postApi/postSlice";
import { usersApi } from "./fetures/userApi/userSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, usersApi.middleware),
});
