import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./Task.css";
const Task = ({ task, onArchiveTask, onPinTask }) => {
    return (React.createElement("div", { className: "task" },
        React.createElement("label", { onClick: () => onArchiveTask(task) },
            React.createElement("input", { type: "checkbox", name: "checked", defaultChecked: task.state === "TASK_ARCHIVED", style: { cursor: 'pointer' } })),
        React.createElement("div", null,
            React.createElement("input", { className: "input", type: "text", value: task.title, readOnly: true, placeholder: "Input title" })),
        React.createElement("div", { className: "icon", onClick: (event) => event.stopPropagation() }, task.state !== "TASK_ARCHIVED" && (React.createElement("span", { style: { cursor: 'pointer' }, onClick: () => onPinTask(task) },
            React.createElement("span", null, task.state === "TASK_PINNED" ? (React.createElement(AiTwotoneStar, { color: "yellow" })) : (React.createElement(AiOutlineStar, null))))))));
};
export default Task;
