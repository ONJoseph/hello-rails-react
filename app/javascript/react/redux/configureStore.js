import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

const configureStore = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default configureStore;
