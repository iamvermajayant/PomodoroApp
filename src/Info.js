import React from "react";
import './App.css';

const Info = () => {
  return (
    <div className="Info-heading-wrapper">
      <h1 style={{ marginTop: "5rem" }}>What is Pomodoro Technique ?</h1>
      <p className="Info-wrapper">
        The Pomodoro Technique is created by Francesco Cirillo for a more
        productive way to work and study. The technique uses a timer to break
        down work into intervals, traditionally 25 minutes in length, separated
        by short breaks. Each interval is known as a pomodoro, from the Italian
        word for 'tomato', after the tomato-shaped kitchen timer that Cirillo
        used as a university student
      </p>
    </div>
  );
};

export default Info;
