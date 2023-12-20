import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Review, IdReview, State } from './types/type';
import * as api from './api';

const initialState: State = {
  reviews: [],
  error: undefined,
};

export const initReviews = createAsyncThunk(
  'review/init',
  (): Promise<Review[]> => api.initReviewsFetch(),
);
export const addReviews = createAsyncThunk('reviews/add', (obj: FormData) =>
  api.addFetchReviews(obj),
);
export const deleteReviews = createAsyncThunk('reviews/delete', (id: IdReview) =>
  api.delFetchReviews(id),
);
export const updateReviews = createAsyncThunk('reviews/update', (obj: Review) =>
  api.updateFetchReviews(obj),
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(initReviews.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(addReviews.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(addReviews.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(deleteReviews.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => review.id !== action.payload);
      })
      .addCase(deleteReviews.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(updateReviews.fulfilled, (state, action) => {
        state.reviews = state.reviews.map((review) =>
          review.id !== action.payload.id ? review : action.payload,
        );
      })
      .addCase(updateReviews.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default reviewsSlice.reducer;
