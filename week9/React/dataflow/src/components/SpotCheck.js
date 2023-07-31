import { useState } from 'react';
import Task from './Task';

function SpotCheck() {
    const [tasks, setTasks] = useState([
        { text: "Take out trash", complete: false },
        { text: "Trash talk Carrie", complete: false },
        { text: "Carry boxes upstairs", complete: false }
      ])

  const clickComplete = function(text) {
     let newTasks = [...tasks];
     let taskIndex = newTasks.findIndex(item => item.text === text)
     if (taskIndex != -1) {
        newTasks.splice(taskIndex, 1); 
        setTasks(newTasks);
     }
  }

    return ( <div> 
        {tasks.map(item => <Task text={item.text} clickComplete={clickComplete}/>)}
        </div>
    );
}

export default SpotCheck;