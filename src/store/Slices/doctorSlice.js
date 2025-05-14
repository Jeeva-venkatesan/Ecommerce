import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PATH, BASE_URL } from "../../api/constant";
import axios from "axios";
import { doctors } from "../../data/appContent";



export const fetchDoctors = createAsyncThunk(API_PATH.DOCTORS,
    async () => {
        const url = BASE_URL + API_PATH.DOCTORS;
        const res = await axios.get(url);

        return doctors;
    }
)

export const fetchDoctorById = createAsyncThunk(API_PATH.DOCTORS,
    async (id) => {
        const url = BASE_URL + API_PATH.DOCTORS;
        const res = await axios.get(url);

        return doctors?.find((item) => item.id === id);
    }
)


const doctorSlice = createSlice({
    name: "doctors",
    initialState: {
        data: doctors,
        loading: false,
        error: null,
        selectedDoctor: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchDoctors.pending, state => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.loading = false;
                state.data = doctors
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
});

export default doctorSlice.reducer;