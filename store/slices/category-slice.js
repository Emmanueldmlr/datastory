import { createSlice } from '@reduxjs/toolkit'
import { CATEGORIES } from 'data/categoryData'

const initialState = {
  categories: CATEGORIES,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategories: (state, action) => {
      state.categories = action.payload
    },
  },
})

export const { updateCategories } = categorySlice.actions

export default categorySlice.reducer