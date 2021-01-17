/// <reference types="react" />
import "./Task.css";
export interface tskinterface {
    state: string;
    id?: string | undefined;
    title?: string | undefined;
}
export interface allTask {
    task: tskinterface;
    onArchiveTask: (task: tskinterface) => void;
    onPinTask: (task: tskinterface) => void;
}
declare const Task: ({ task, onArchiveTask, onPinTask }: allTask) => JSX.Element;
export default Task;
