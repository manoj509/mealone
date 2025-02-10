import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
import { notifyError, notifySuccess } from '../../utils/ToastUtils';

// Async thunk to create a plan
export const createPlan = createAsyncThunk('plans/createPlan', async (planData, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
        const response = await api.post("/plans/create", planData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Async thunk to fetch all plans
export const getPlans = createAsyncThunk('plans/getPlans', async (_, thunkAPI) => {
    try {
        const response = await api.get("/plans");
        return response.data; // Assuming the API returns an array of plans
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const updatePlan = createAsyncThunk(
  "plans/updatePlan",
  async ({ planId, updatedData }, thunkAPI) => {
    try {
      console.log("slice kade aala data" , planId , updatedData)
      const token = localStorage.getItem("token");
      const response = await api.put(`/plans/${planId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data; // Assuming the API returns the updated plan
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const deletePlan = createAsyncThunk(
    "plans/deletePlan",
    async (planId, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.delete(`/plans/${planId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return { planId, message: response.data.message }; // Assuming the API sends a success message
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

// Redux slice
const planSlice = createSlice({
    name: 'plans',
    initialState: {
        plans: [],
        loading: false,
        error: null,
        planUpdatedSuccessfully : null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Create Plan
            .addCase(createPlan.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.plans.push(action.payload.plan);
                notifySuccess("Plan created successfully")
            })
            .addCase(createPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                notifyError("Network Error")
            })

            // Get Plans
            .addCase(getPlans.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPlans.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = action.payload; // Assuming the API returns an array of plans
            })
            .addCase(getPlans.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deletePlan.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(deletePlan.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = state.plans.filter(
                  (plan) => plan._id !== action.payload.planId
                );
               
              })
              .addCase(deletePlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
              .addCase(updatePlan.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(updatePlan.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.plans.findIndex(
                  (plan) => plan._id === action.payload._id
                );
                if (index !== -1) {
                  state.plans[index] = action.payload; // Replace the updated plan in the list
                }
                state.planUpdatedSuccessfully = !state.planUpdatedSuccessfully;
              })
              .addCase(updatePlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              });
    },
});

export default planSlice.reducer;
