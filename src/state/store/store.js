import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from '../taskList/taskListSlice';

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});
