import styled from "styled-components";
import dice1 from "/images/dice/dice_1.png";
import dice2 from "/images/dice/dice_2.png";
import dice3 from "/images/dice/dice_3.png";
import dice4 from "/images/dice/dice_4.png";
import dice5 from "/images/dice/dice_5.png";
import dice6 from "/images/dice/dice_6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const RollDice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img
          src={
            currentDice === undefined
              ? diceImages[0]
              : diceImages[currentDice - 1]
          }
          alt={`dice ${currentDice}`}
        />
      </div>
      <p>Click on Dice to Roll it</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .dice {
    cursor: pointer;
  }

  p {
    margin-top: 0;
    font-size: 24px;
  }
`;
