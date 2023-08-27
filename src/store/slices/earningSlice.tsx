import { createSlice } from "@reduxjs/toolkit";


interface Show {
    totalSales: any,
    totalOrders: any,
    show: any
}

const initialState: Show = {
    totalSales: 251,
    totalOrders: 176,
    show: null,
} as Show

export const earningSlice = createSlice({
    name: "earningSlice",
    initialState,
    reducers: {
        setValue: (state, { payload }) => {
            state.totalOrders = payload.totalOrders,
                state.totalSales = payload.totalSales,
                state.show = payload.show
        }
    }
})

export const { setValue } = earningSlice.actions
export default earningSlice.reducer