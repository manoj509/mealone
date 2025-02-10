import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

// Async thunk to send register OTP
export const sendRegisterOtp = createAsyncThunk('auth/sendRegisterOtp',async (registerOtpData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/send-register-otp', registerOtpData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);

// Async thunk to verify register OTP
export const verifyRegisterOtp = createAsyncThunk( 'auth/verifyRegisterOtp',async (otpData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/verify-register-otp', otpData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);

// Async thunk to send login OTP
export const sendLoginOtp = createAsyncThunk('auth/sendLoginOtp',async (loginOtpData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/send-login-otp', loginOtpData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);

// Async thunk to verify login OTP
export const verifyLoginOtp = createAsyncThunk('auth/verifyLoginOtp',async (otpData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/verify-login-otp', otpData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || 'Something went wrong');
    }
  }
);
export const verifyToken = createAsyncThunk( 'auth/verifyToken', async (_, { rejectWithValue }) => {
  const  token = localStorage.getItem('token');
  try {
    const response = await api.post('/token/verify-token', _ , {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  });
    return response.data; // Assuming the response contains user data if the token is valid
  } catch (error) {
    return rejectWithValue(error.response.data); // Return error message on failure
  }
}
);


// Initial state
const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  loginOtpSendSuccess : null,
  registerOtpSendSuccess : null
};

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder

    .addCase(verifyToken.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(verifyToken.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload; // Assuming API response includes user data
    })
    .addCase(verifyToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to verify token';
      state.isAuthenticated = false;
      state.token = null;
      // localStorage.removeItem('accessToken');
    })
      // Handle register OTP
      .addCase(sendRegisterOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendRegisterOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerOtpSendSuccess = true 
        // state.token = action.payload.token;
        // localStorage.setItem('token', action.payload.token);
      })
      .addCase(sendRegisterOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle verify register OTP
      .addCase(verifyRegisterOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyRegisterOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
        
      })
      .addCase(verifyRegisterOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle send login OTP
      .addCase(sendLoginOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendLoginOtp.fulfilled, (state) => {
        state.isLoading = false;
        state.loginOtpSendSuccess = true 
      })
      .addCase(sendLoginOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Handle verify login OTP
      .addCase(verifyLoginOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyLoginOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(verifyLoginOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
