import React from "react";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="timerBox">
        <div className="timerBox__time"></div>
        <div className="timerBox__record"></div>
        <div className="timerBox__btn"></div>
      </div>
    );
  }
}

export default App;
