import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import msgReducer from './msg'



export const store = configureStore({
    reducer: {
        auth:authReducer,
        msg:msgReducer
    }
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: false
    // }),
  })