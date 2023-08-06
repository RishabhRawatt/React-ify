import { useState } from "react";
import StartPage from "./components/StartPage.jsx";
import GamePlay from "./components/GamePlay.jsx";

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartPage toggle={toggleGamePlay} />}</>
  );
}

export default App;
