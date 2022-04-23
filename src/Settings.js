import React, { useContext } from "react";
import "./Settings.css";
import ReactSlider from "react-slider";
import "./Slider.css";
import settingsContext from "./settingContext";
import Button from "./Button";

const Settings = () => {
  const settingsInfo = useContext(settingsContext);
  return (
    <div className="settings-wrapper" style={{ textAlign: "left" }}>
      <div style={{marginBottom : '2rem'}}>
        <Button onClick={() => settingsInfo.setShowSettings(false)}>Back</Button>
      </div>

      <label>Work minutes {settingsInfo.workMinutes} : 00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break minutes {settingsInfo.breakMinutes} : 00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
    </div>
  );
};

export default Settings;
