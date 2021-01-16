import React from "react";
import "./App.css";
import InboxScreen from "./Components/InboxScreen/InboxScreen";

function App() {
  return (
    <div className="App">
      <h1>Task Box</h1>
      <span>{<InboxScreen />}</span>
    </div>
  );
}

export default App;
