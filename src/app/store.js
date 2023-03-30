import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
import { posterSlice } from "../features/posts/postSlice";
import { api } from "../api/apiSlice";

export const store = configureStore({
    reducer: {
        test: counterSlice.reducer,
        // post: posterSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefault) => getDefault().concat(api.middleware)
})