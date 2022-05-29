import { configureStore } from '@reduxjs/toolkit';
import { isSignUpModalOpenSlice } from './slices/isSignUpModalOpenSlice';
import { isSignInModalOpenSlice } from './slices/isSignInModalOpenSlice';

export const store = configureStore({
  reducer: {
    isSignUpModalOpenSlice: isSignUpModalOpenSlice.reducer,
    isSignInModalOpenSlice: isSignInModalOpenSlice.reducer,
  },
});
