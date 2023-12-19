import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ReviewForDoctor, IdReviewForDoctor, State } from './types/type';
import * as api from '../api/apireviewForDoctors';

const initialState: State = {
  reviewForDoctors: [],
  reviewForСlinics: [],
  error: undefined,
};

export const initReviewForDoctors = createAsyncThunk(
  'reviewForDoctors/init',
  (): Promise<ReviewForDoctor[]> => api.initReviewForDoctorsFetch(),
);
export const addReviewForDoctors = createAsyncThunk('reviewForDoctors/add', (obj: FormData) =>
  api.addFetchReviewForDoctors(obj),
);
export const deleteReviewForDoctors = createAsyncThunk(
  'reviewForDoctors/delete',
  (id: IdReviewForDoctor) => api.delFetchReviewForDoctors(id),
);
export const updateReviewForDoctors = createAsyncThunk(
  'reviewForDoctors/update',
  (obj: ReviewForDoctor) => api.updateFetchReviewForDoctors(obj),
);

const reviewForDoctorsSlice = createSlice({
  name: 'reviewForDoctors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initReviewForDoctors.fulfilled, (state, action) => {
        state.reviewForDoctors = action.payload;
      })
      .addCase(initReviewForDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addReviewForDoctors.fulfilled, (state, action) => {
        state.reviewForDoctors.push(action.payload);
      })
      .addCase(addReviewForDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteReviewForDoctors.fulfilled, (state, action) => {
        state.reviewForDoctors = state.reviewForDoctors.filter(
          (reviewForDoctor) => reviewForDoctor.id !== action.payload,
        );
      })
      .addCase(deleteReviewForDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateReviewForDoctors.fulfilled, (state, action) => {
        state.reviewForDoctors = state.reviewForDoctors.map((reviewForDoctor) =>
          reviewForDoctor.id !== action.payload.id ? reviewForDoctor : action.payload,
        );
      })
      .addCase(updateReviewForDoctors.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default reviewForDoctorsSlice.reducer;
