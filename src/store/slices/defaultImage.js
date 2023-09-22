import { createSlice } from "@reduxjs/toolkit";

const defaultImage = createSlice({
    name: 'defaultImage',
    initialState: {
        value: []
    },
    reducers: {
        handleDefaultImage(state, { payload }) {
            state.value = payload.defaultImage
        }
    }
})

export default defaultImage.reducer
export const selectDefaultImage = ((state) => state.defaultImage.value)
export const {handleDefaultImage} = defaultImage.actions