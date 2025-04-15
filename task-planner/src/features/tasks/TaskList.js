import React from 'react';
 import { useSelector}  from 'react-redux';
import TaskItem from '../../components/TaskItem';

 const TaskList=()=>
 {
    const tasks=useSelector(state=>state.tasks);

     return(
        <div className="mt-4 space-y-2">

            {tasks.length ===0 && <p className="text-gray-500">No task added yet</p>}
            { tasks.map(task=>(
                <TaskItem key={task.id} task={task}/>
            ))}
        
        </div>
     );
 };
 export default TaskList;