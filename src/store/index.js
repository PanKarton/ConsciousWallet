import { configureStore } from '@reduxjs/toolkit';
import { isSignInModalOpenSlice } from './slices/isSignInModalOpenSlice';

export const store = configureStore({
  reducer: {
    isSignInModalOpenSlice: isSignInModalOpenSlice.reducer,
  },
});
