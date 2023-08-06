import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumer, setSelecedNumer] = useState();
  const [currentDice, setCurrentDice] = useState();
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    //guard clause
    if (!selectedNumer) {
      setError("Please select a number first (Hosiyari Nahi)");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(() => randomNumber);

    if (selectedNumer === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelecedNumer(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumer={selectedNumer}
          setSelecedNumer={setSelecedNumer}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>

        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide " : "Show "}
          Rules
        </Button>
        {showRules && <Rules />}
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    margin: 0 17px;
    display: flex;
    justify-content: space-between;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
