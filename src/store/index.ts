// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import dialog from 'src/store/dialog'

// ** Api
import { projectApi } from 'src/store/api/project'
import { whitelistApi } from 'src/store/api/whitelist'
import { roleAndPermissionApi } from 'src/store/api/roleAndPermission'

export const store = configureStore({
  reducer: {
    dialog,
    [roleAndPermissionApi.reducerPath]: roleAndPermissionApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [whitelistApi.reducerPath]: whitelistApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([roleAndPermissionApi.middleware, projectApi.middleware, whitelistApi.middleware])
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
