import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
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

const Task = ({ task, onArchiveTask, onPinTask }: allTask) => {
  return (
    <div className="task">
      <label onClick={() => onArchiveTask(task)}>
        <input
          type="checkbox"
          name="checked"
        //   disabled={true}
                  defaultChecked={task.state === "TASK_ARCHIVED"}
                  style={{ cursor: 'pointer'}}
        />
      </label>
      <div>
        <input
          className="input"
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
          
        />
      </div>

      <div className="icon" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <span style={{ cursor: 'pointer'}} onClick={() => onPinTask(task)}>
            <span>
              {task.state === "TASK_PINNED" ? (
                <AiTwotoneStar color="yellow" />
              ) : (
                <AiOutlineStar />
              )}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Task;
