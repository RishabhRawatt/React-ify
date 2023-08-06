import styled from "styled-components";
import { Button } from "../styled/Button";

const startPage = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}>
        Play Now</Button>
      </div>
    </Container>
  );
};

export default startPage;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content{
    display:flex;
    flex-direction: column;
    align-items:end ;
  }

  .content h1 {
    font-size: 6rem;
    white-space: nowrap;
    margin-bottom: 0;
  }
`;

