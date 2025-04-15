import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: nanoid(), ...action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
  