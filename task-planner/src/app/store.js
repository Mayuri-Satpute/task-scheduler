import { configureStore }  from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/TaskSlice';

export const store=configureStore({
    reducer:
    {
        tasks:taskReducer /*manages the slice of state ((add,remove,update))*/
    },
});
