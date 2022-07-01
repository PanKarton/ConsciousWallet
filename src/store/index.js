import { configureStore } from '@reduxjs/toolkit';
import { isSignInModalOpenSlice } from './slices/isSignInModalOpenSlice';
import { isNewTweetModalOpenSlice } from './slices/isNewTweetModalOpenSlice';

export const store = configureStore({
  reducer: {
    isSignInModalOpenSlice: isSignInModalOpenSlice.reducer,
    isNewTweetModalOpenSlice: isNewTweetModalOpenSlice.reducer,
  },
});
