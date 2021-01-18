import React from "react";
import InboxScreen from "../InboxScreen/InboxScreen";

function Taskbox() {
  return (
    <div className="App">
      <h1>Task Box</h1>
      <span>{<InboxScreen />}</span>
    </div>
  );
}

export default Taskbox;
