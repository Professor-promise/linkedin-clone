import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    posts: postsReducer,
  },
});
