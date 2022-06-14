import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  measures: null
}

export const measureSlice = createSlice({
  name: 'measure',
  initialState,
  reducers: {
    saveMeasures: (state, action) => {
        state.measures = action.payload.measures
    }
  },
})

export const { saveMeasures} = measureSlice.actions

export default measureSlice.reducer