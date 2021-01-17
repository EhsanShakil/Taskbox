import React from "react";
import InboxScreen from "../InboxScreen/InboxScreen";
function Taskbox() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Task Box"),
        React.createElement("span", null, React.createElement(InboxScreen, null))));
}
export default Taskbox;
