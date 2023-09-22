import { configureStore } from '@reduxjs/toolkit'
import defaultImage from './slices/defaultImage'
import search from './slices/search'

export default configureStore({
    reducer: {
        defaultImage,
        search
    },
})