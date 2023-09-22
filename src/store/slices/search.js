import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: {
        value: []
    },
    reducers: {
        handleSearch(state, { payload }) {
            state.value = payload.search
        }
    }
})

export default search.reducer
export const { handleSearch } = search.actions
export const selectSearch = ((state) => state.search.value)