// features/orders/orderSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk for creating an order
export const createOrder = createAsyncThunk('orders/createOrder', async (orderData, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/orders', orderData); // Replace with your backend API endpoint
            return response.data.order; // Return the created order
        } catch (error) {
            return rejectWithValue(error.response.data.message); // Handle server error
        }
    }
);

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [], // List of orders
        loading: false, // Loading state
        error: null,    // Error messages
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.orders.push(action.payload); // Add the newly created order to the state
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Store the error message
            });
    },
});

export default orderSlice.reducer;


