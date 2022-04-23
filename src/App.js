import { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Settings from "./Settings";
import settingContext from "./settingContext";
import Todo from "./todoApp/Todo.js";
import Info from "./Info";

function App() {
  const [showsettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  return (
    <div className="main-wrapper">
      <settingContext.Provider
        value={{
          showsettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showsettings ? <Settings /> : <Timer />}
      </settingContext.Provider>
      {!showsettings && <Todo/>}
      {!showsettings && <Info/>}
    </div>
   
  );
}

export default App;
