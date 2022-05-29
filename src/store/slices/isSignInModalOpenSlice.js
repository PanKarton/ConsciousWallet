import { createSlice } from '@reduxjs/toolkit';

export const isSignInModalOpenSlice = createSlice({
  name: 'Is Sign In Modal Open',
  initialState: false,
  reducers: {
    handleSignInModalOpen: () => true,
    handleSignInModalClose: () => false,
  },
});

export const { handleSignInModalOpen, handleSignInModalClose } = isSignInModalOpenSlice.actions;
