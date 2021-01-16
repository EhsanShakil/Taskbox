import React from "react";
import TaskList from "../TaskList/TaskList";

const InboxScreen: React.FC<any> = ({ error }) => {
  if (error) {
    return (
      <div>
          <div>Something Went Wrong</div>
      </div>
    );
  }

  return (
    <div>
        <TaskList
          loading={false}
          tasks={[
            { id: "1", title: "Task 1", state: "TASK_INBOX" },
            { id: "2", title: "Task 2", state: "TASK_INBOX" },
            { id: "3", title: "Task 3", state: "TASK_INBOX" },
            { id: "4", title: "Task 4", state: "TASK_INBOX" },
            { id: "5", title: "Task 5", state: "TASK_PINNED" },
            { id: "6", title: "Task 6", state: "TASK_INBOX" },
          ]}
        />
    </div>
  );
};

export default InboxScreen