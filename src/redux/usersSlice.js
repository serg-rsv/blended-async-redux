import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, deleteUser, addUser } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [deleteUser.rejected]: (state) => {
      state.isLoading = false;
    },
    [addUser.pending]: (state) => {
      state.isLoading = true;
    },
    [addUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default usersSlice.reducer;
