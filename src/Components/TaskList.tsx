import React from 'react';
import Task from './Task';
import {task} from '../stories/TaskList.stories'

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: task) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading...</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}