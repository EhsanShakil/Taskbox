import React from 'react';
import Task from '../Task/Task';
// import {task} from '../stories/TaskList.stories'
import {VscLoading} from 'react-icons/vsc'
import './TaskList.css'
import { tskinterface } from "../Task/Task";


export interface task {
  tasks: tskinterface[];
  loading: boolean;
}

export default function TaskList({ loading, tasks }: task) {
  const [taskItems, setTaskItem] = React.useState<tskinterface[]>(tasks);
  const onPinTask = React.useCallback(
    (tasks: tskinterface) => {
      const filteredList = taskItems.filter((item) => item.id !== tasks.id);
      let newTask: tskinterface = {
        id: tasks.id,
        title: tasks.title,
        state: tasks.state === "TASK_PINNED" ? "TASK_INBOXED" : "TASK_PINNED",
      };
      setTaskItem([...filteredList, newTask]);
    },
    [taskItems]
  );

const onArchiveTask = React.useCallback(
    (tasks: tskinterface) => {
      const filteredList = taskItems.filter((item) => item.id !== tasks.id);
      setTaskItem(filteredList);
    },
    [taskItems]
  );
    
    
   const LoadingRow = (
    <div>
        <span>{<VscLoading className='loading'/>}</span>
    </div>
  );
  if (loading) {
    return (
      <div className='loader' >
        <div >{LoadingRow}</div>
        <div>{LoadingRow}</div>
        <div>{LoadingRow}</div>
        <div>{LoadingRow}</div>
        <div>{LoadingRow}</div>
        <div>{LoadingRow}</div>
      </div>
    );
  }
  if (taskItems.length === 0) {
    return (
      <div>
          <div>You have no tasks</div>
          <div>Sit back and relax</div>
      </div>
    );
  }
  const tasksInOrder = [
    ...taskItems.filter(t => t.state === 'TASK_PINNED'),
    ...taskItems.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div>
      {tasksInOrder.map(task => (
          <Task key={task.id} task={task} onPinTask={onPinTask} onArchiveTask={onArchiveTask}/>
      ))}
    </div>
  );
}