import { createSlice } from '@reduxjs/toolkit';

export const isNewTweetModalOpenSlice = createSlice({
  name: 'Is New Tweet Modal Open',
  initialState: false,
  reducers: {
    handleNewTweetModalOpen: () => true,
    handleNewTweetModalClose: () => false,
  },
});

export const { handleNewTweetModalOpen, handleNewTweetModalClose } = isNewTweetModalOpenSlice.actions;
