import styled from "styled-components";

const NumberSelector = ({ setError,error,selectedNumer, setSelecedNumer }) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler= (value)=>{
    setSelecedNumer(value);
    setError("");
  }

  return (
    <NumberDiv>
    <p className="error">{error}</p>
      <div className="all_numdiv">
        {array.map((value, i) => (
          <Box
            isSelected={value === selectedNumer}
            key={i}
            // whenever you pass value to function need callback
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select A Number</p>
    </NumberDiv>
  );
};

export default NumberSelector;

const NumberDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .all_numdiv {
    display: flex;
    gap: 24px;
  }
  .error{
    color:red;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 0;
  }
`;

const Box = styled.div`
  cursor: pointer;
  border: 2px solid #000;
  background: #fff;
  border-radius: 10px;
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
