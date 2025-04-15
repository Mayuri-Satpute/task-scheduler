import React from 'react'
import {useDispatch} from 'react-redux';
import {toggleTask,deleteTask} from '../features/tasks/TaskSlice';

const TaskItem= ({task})=>
{
    const dispatch=useDispatch();
 return(
    <div className="flex justify-between items-center p-3 bg-white shadow rounded">
      <div>
        <h3 className={`font-medium ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.title}</h3>
        <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => dispatch(toggleTask(task.id))} className="text-green-500">✔</button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="text-red-500">🗑</button>
      </div>
    </div>
  );
};

export default TaskItem;