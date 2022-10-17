import styled, { createGlobalStyle } from "styled-components";

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Courier, monospace, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
    font-weight: 500;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 40px;
    margin: 20px 0;
    padding: 0px 40px;
  }

  .start {
    max-width: 200px;
  }
`;

export const QuestionCardWrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.25s ease-in;

  :hover {
    opacity: 0.75;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.75rem;
    height: 40px;
    margin: 5px 0;
    width: 100%;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#56ffa4,#59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656,#c16868)"
        : "linear-gradient(90deg,#56ccff,#6eafb4)"};

    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
