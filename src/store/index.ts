import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'

import cart from './reducers/cart'
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export const store = configureStore({
  reducer: {
    cart: cart,
    [api.reducerPath]: api.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
