import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <div className="rules">
      <h1>How to play dice game</h1>
        <p>1. Select a number from 1 to 6</p>
        <p>2. Roll the dice by clicking dice image</p>
        <p>
          3. If you guessed the number correctly, you will get the same number
          of points as the number you guessed
        </p>
        <p>
          4. If you guessed the number incorrectly, you will lose 2 points{" "}
        </p>
        <p>5. Easy pessy 🧊</p>
      </div>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  width: 600px;
  height: 300px;
  text-align:start;
  background: #fbf1f1;


    .rules{
        margin-left: 20px;
    }
`;
