import { createSlice } from '@reduxjs/toolkit';

export const isSignUpModalOpenSlice = createSlice({
  name: 'Is Sign Up Modal Open',
  initialState: false,
  reducers: {
    handleSignUpModalOpen: () => true,
    handleSignUpModalClose: () => false,
  },
});

export const { handleSignUpModalClose, handleSignUpModalOpen } = isSignUpModalOpenSlice.actions;
