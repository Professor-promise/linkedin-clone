import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  id: nanoid(),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.user = true;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;

/* const initialState = [
  {
    id: nanoid(),
    name: 'Umeh Promise Chidubem',
    description: 'Student at Nnamdi Azikiwe University',
  },
];

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
 */
