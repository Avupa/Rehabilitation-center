import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { ReviewForСlinic, IdReviewForСlinic, State } from './types/type';
import * as api from '../api/apireviewForClinics';

const initialState: State = {
  reviewForDoctors: [],
  reviewForСlinics: [],
  error: undefined,
};

export const initReviewForСlinics = createAsyncThunk(
  'reviewForСlinics/init',
  (): Promise<ReviewForСlinic[]> => api.initReviewForClinicsFetch(),
);
export const addReviewForСlinics = createAsyncThunk('reviewForСlinics/add', (obj: FormData) =>
  api.addFetchReviewForClinics(obj),
);
export const deleteReviewForСlinic = createAsyncThunk(
  'reviewForСlinics/delete',
  (id: IdReviewForСlinic) => api.delFetchReviewForСlinics(id),
);
export const updateReviewForСlinic = createAsyncThunk(
  'reviewForСlinics/update',
  (obj: ReviewForСlinic) => api.updateFetchReviewForСlinics(obj),
);

const reviewForСlinicsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initReviewForСlinics.fulfilled, (state, action) => {
        state.reviewForСlinics = action.payload;
      })
      .addCase(initReviewForСlinics.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addReviewForСlinics.fulfilled, (state, action) => {
        state.reviewForСlinics.push(action.payload);
      })
      .addCase(addReviewForСlinics.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteReviewForСlinic.fulfilled, (state, action) => {
        state.reviewForСlinics = state.reviewForСlinics.filter(
          (clinikaReview) => clinikaReview.id !== action.payload,
        );
      })
      .addCase(deleteReviewForСlinic.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateReviewForСlinic.fulfilled, (state, action) => {
        state.reviewForСlinics = state.reviewForСlinics.map((reviewForСlinic) =>
          reviewForСlinic.id !== action.payload.id ? reviewForСlinic : action.payload,
        );
      })
      .addCase(updateReviewForСlinic.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default reviewForСlinicsSlice.reducer;
