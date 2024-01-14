// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import dialog from 'src/store/dialog'

// ** Api
import { roleAndPermissionApi } from 'src/store/api/roleAndPermission'

export const store = configureStore({
  reducer: {
    dialog,
    [roleAndPermissionApi.reducerPath]: roleAndPermissionApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([roleAndPermissionApi.middleware])
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
