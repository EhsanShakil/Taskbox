import React from 'react';
import Task from './Task';
import {task} from '../stories/TaskList.stories'
import {VscLoading} from 'react-icons/vsc'
import './TaskList.css'

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: task) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

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
  if (tasks.length === 0) {
    return (
      <div>
          <div>You have no tasks</div>
          <div>Sit back and relax</div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter(t => t.state === 'TASK_PINNED'),
    ...tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];
  return (
    <div>
      {tasksInOrder.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}