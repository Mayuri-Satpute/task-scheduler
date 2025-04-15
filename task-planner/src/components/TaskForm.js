import React, { useState } from 'react'

 import {useDispatch} from 'react-redux';
 import { addTask } from '../features/tasks/TaskSlice';

  const TaskForm = () =>
  {
    const[title,setTitle]=useState('');
    const [deadline,setDeadline]=useState('');
    const dispatch=useDispatch();

     const handlesubmit=(e)=>
     {
         e.preventDefault();
          if(!title || !deadline) return;
          dispatch(addTask({title,deadline}));
          setTitle('');
          setDeadline('');
     };

     return(
     <form onSubmit={handlesubmit} className="space-y-4">
         <input
          type="text" placeholder='task title' className="border px-3 py-2 w-full rounded" value={title} onChange={(e)=>setTitle(e.target.value)}/>
       <input type="date" className='border px-3 py-2 w-full rounded' value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add task</button>
 </form>
     );
     };
      export default TaskForm;