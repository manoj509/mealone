import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { notifyError, notifySuccess } from '../../utils/ToastUtils';

// Async thunk to create a plan
export const addSubscriber = createAsyncThunk('plans/subscribe', async (planData, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const response = await api.post("/sub/subcribe", planData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});






// Redux slice
const planSlice = createSlice({
    name: 'subscribe',
    initialState: {
        subScribePlans: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addSubscriber.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addSubscriber.fulfilled, (state, action) => {
                state.loading = false;
                state.subScribePlans.push(action.payload.subScribePlans);
               
            })
            .addCase(addSubscriber.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default planSlice.reducer;
