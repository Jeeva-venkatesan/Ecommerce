import { configureStore } from '@reduxjs/toolkit'
import doctorReducer from './Slices/doctorSlice'

export const store = configureStore({
    reducer: {
        doctors: doctorReducer
    }
})