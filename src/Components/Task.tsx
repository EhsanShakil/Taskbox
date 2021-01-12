import React from "react";
import { allTask } from "../stories/Task.stories";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";

const Task = ({ task, onArchiveTask, onPinTask }: allTask) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checked"
          disabled={true}
          defaultChecked={task.state === "TASK_ARCHIVED"}
        />
        <span onClick={() => onArchiveTask(task)} />
      </label>
      <div>
        <input
          type="text"
          value={task.title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <span onClick={() => onPinTask(task)}>
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
