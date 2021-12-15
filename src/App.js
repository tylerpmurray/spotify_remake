import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import ControlBar from "./components/ControlBar/ControlBar";

function App() {
  return (
    <div className="App">
      <div className="flex-container">
        <Sidebar />
        <Main />
      </div>
      <ControlBar />
    </div>
  );
}

export default App;
