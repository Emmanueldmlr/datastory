import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slices/category-slice'
import dataSlice from './slices/data-slice'
import measureSlice from './slices/measure-slice'

export const store = configureStore({
  reducer: {
    category: categorySlice,
    measure: measureSlice,
    data: dataSlice
  },
})