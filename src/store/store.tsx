import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./slices/sidebarSlice";
import earningSlice from "./slices/earningSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        earning: earningSlice
    },
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;