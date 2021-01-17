import React from 'react';
import Task from '../Task/Task';
import { VscLoading } from 'react-icons/vsc';
import './TaskList.css';
export default function TaskList({ loading, tasks }) {
    const [taskItems, setTaskItem] = React.useState(tasks);
    const onPinTask = React.useCallback((tasks) => {
        const filteredList = taskItems.filter((item) => item.id !== tasks.id);
        let newTask = {
            id: tasks.id,
            title: tasks.title,
            state: tasks.state === "TASK_PINNED" ? "TASK_INBOXED" : "TASK_PINNED",
        };
        setTaskItem([...filteredList, newTask]);
    }, [taskItems]);
    const onArchiveTask = React.useCallback((tasks) => {
        const filteredList = taskItems.filter((item) => item.id !== tasks.id);
        setTaskItem(filteredList);
    }, [taskItems]);
    const LoadingRow = (React.createElement("div", null,
        React.createElement("span", null, React.createElement(VscLoading, { className: 'loading' }))));
    if (loading) {
        return (React.createElement("div", { className: 'loader' },
            React.createElement("div", null, LoadingRow),
            React.createElement("div", null, LoadingRow),
            React.createElement("div", null, LoadingRow),
            React.createElement("div", null, LoadingRow),
            React.createElement("div", null, LoadingRow),
            React.createElement("div", null, LoadingRow)));
    }
    if (taskItems.length === 0) {
        return (React.createElement("div", null,
            React.createElement("div", null, "You have no tasks"),
            React.createElement("div", null, "Sit back and relax")));
    }
    const tasksInOrder = [
        ...taskItems.filter(t => t.state === 'TASK_PINNED'),
        ...taskItems.filter(t => t.state !== 'TASK_PINNED'),
    ];
    return (React.createElement("div", null, tasksInOrder.map(task => (React.createElement(Task, { key: task.id, task: task, onPinTask: onPinTask, onArchiveTask: onArchiveTask })))));
}
