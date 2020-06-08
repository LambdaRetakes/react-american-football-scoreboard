//TODO: STEP 1 - Import the useState hook.
// yeet
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ourBoisScore, setOurBoisScore] = useState(0);
  const [badBoisScore, setBadBoisScore] = useState(0);
  // const [time] = useState(Date.Now)

  const weScored = e => {
    setOurBoisScore(ourBoisScore + 10);
  }
  const weFouled = e => {
    setOurBoisScore(ourBoisScore - 5);
  }
  const theyScored = e => {
    setBadBoisScore(badBoisScore + 10);
  }
  const theyFouled = e => {
    setBadBoisScore(badBoisScore - 5);
  }
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{ourBoisScore}</div>
          </div>
          {/* <div className="timer">{time}</div> */}
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{badBoisScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={weScored} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={weFouled} className="homeButtons__fieldGoal">Home Foul</button>
        </div>
        <div className="awayButtons">
          <button onClick={theyScored} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={theyFouled} className="awayButtons__fieldGoal">Away Foul</button>
        </div>
      </section>
    </div>
  );
}

export default App;
