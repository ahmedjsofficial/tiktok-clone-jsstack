import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { tiktokAPI } from "./tiktokAPI";

export const Store = configureStore({
    reducer: {
        [tiktokAPI.reducerPath]: tiktokAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tiktokAPI.middleware),
});

setupListeners(Store.dispatch)