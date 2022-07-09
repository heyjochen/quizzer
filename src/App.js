import "./App.css";
import React, { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [started, setStarted] = useState(false);

  return <>{started ? <Quiz /> : <Intro setStarted={setStarted} />}</>;
}

export default App;
