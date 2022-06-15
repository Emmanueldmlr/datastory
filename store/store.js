import { configureStore } from '@reduxjs/toolkit'
import { dataApi } from 'services/data'
import { measureApi } from 'services/measure'
import categorySlice from './slices/category-slice'

export const store = configureStore({
  reducer: {
    category: categorySlice,
    [measureApi.reducerPath]: measureApi.reducer,
    [dataApi.reducerPath]: dataApi.reducer
  },
  middleware: gDM => 
  gDM({ serializableCheck: true })
  .concat(measureApi.middleware)
})

