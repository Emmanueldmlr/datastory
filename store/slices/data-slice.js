import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.data = action.payload.data
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveData} = dataSlice.actions

export default dataSlice.reducer