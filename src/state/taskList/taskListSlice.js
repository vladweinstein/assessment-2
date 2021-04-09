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
        removeTask: (state, action) => {
            state.taskList.splice(action.payload, 1);
        },
        completeTask: (state, action) => {
            state.taskList[action.payload].completed = true;
        }
    }
});

export const { addTask, removeTask, completeTask } = taskListSlice.actions;
export const selectTaskList = (state) => state.taskList;
export default taskListSlice.reducer;
