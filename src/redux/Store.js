import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/CounterSlice'


// centralized data of all slices
export const store = configureStore({
  reducer: {
    counter : CounterSlice  
  },
})