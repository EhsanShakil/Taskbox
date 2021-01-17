import React from "react";
import InboxScreen from "../InboxScreen/InboxScreen";

function Taskbox() {
  return (
    <div >
      <h1>Task Box</h1>
      <span>{<InboxScreen />}</span>
    </div>
  );
}

export default Taskbox;
