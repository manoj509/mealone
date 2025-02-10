// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import api from '../../api';

// // Async thunk to verify the token
// export const verifyToken = createAsyncThunk( 'auth/verifyToken', async (_, { rejectWithValue }) => {
//     const  token = localStorage.getItem('token');
//     try {
//       const response = await api.post('/token/verify-token', _ , {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//       return response.data; // Assuming the response contains user data if the token is valid
//     } catch (error) {
//       return rejectWithValue(error.response.data); // Return error message on failure
//     }
//   }
// );

// const tokenSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     setToken: (state, action) => {
//       const token = action.payload;
//       state.token = token;
//       state.isAuthenticated = true;
//       localStorage.setItem('accessToken', token);
//     },
//     clearToken: (state) => {
//       state.token = null;
//       state.user = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('accessToken');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(verifyToken.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(verifyToken.fulfilled, (state, action) => {
//         state.loading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload; // Assuming API response includes user data
//       })
//       .addCase(verifyToken.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || 'Failed to verify token';
//         state.isAuthenticated = false;
//         state.token = null;
//         // localStorage.removeItem('accessToken');
//       });
//   },
// });

// export const { setToken, clearToken } = tokenSlice.actions;

// export default tokenSlice.reducer;
