// import {configureStore} from "@reduxjs/toolkit"
// import candidateSlice from "./candidateSlice"

// const store = configureStore({
//     reducer:{
//         candidate: candidateSlice
//     }
// })



// export default store;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import candidateSlice from "./candidateSlice"
import employerSlice from "./employerSlice"
import adminSlice from "./adminSlice"
import jobSlice from "./jobSlice"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}


const rootReducer = combineReducers({
    candidate: candidateSlice,
    employer : employerSlice,
    admin : adminSlice,
    job: jobSlice,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})



export default store;