import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        taskList: []
    },
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
        },
        // Action payload here must be the index of the task in the array
        // that is being removed.
        removeTask: (state, action) => {
            state.taskList.splice(action.payload, 1);
        },
        // Action payload here must be the index of the task in the array
        // that is being "completed".
        completeTask: (state, action) => {
            state.taskList[action.payload].completed = true;
        }
    }
});

export const { addTask, removeTask, completeTask } = taskListSlice.actions;
export const selectTaskList = (state) => state.taskList.taskList;
export default taskListSlice.reducer;