import { createSlice } from "@reduxjs/toolkit";

interface Show {
    show: any
}

const initialState: Show ={
        show: false
    } as Show


export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setShow: (state, {payload}) => {
            state.show = payload
        }
    }
})

export const { setShow } = sidebarSlice.actions
export default sidebarSlice.reducer