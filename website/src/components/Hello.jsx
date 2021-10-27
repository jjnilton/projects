import { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Context from "../store/context";

const slideUp = keyframes`
  from {
    transform: translateY(16%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const content = {
  firstHalf: {
    en: "Hello, I'm JJ, and",
    pt: "Olá, eu sou o JJ e",
  },
  secondHalf: {
    en: "this is my website.",
    pt: "este é o meu website.",
  },
};

const StyledHello = styled.section`
  font-size: 2em;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  animation: ${slideUp} 2s;
  h1 {
    display: grid;
  }
  h1 > span:first-child {
    font-size: .75em;
    margin-bottom: 0;
  }
  h1 > span:last-child {
    margin-top: 0;
  }
`;

const Hello = () => {
  const { lang } = useContext(Context);

  return (
    <StyledHello>
      <h1><span>{content.firstHalf[lang]}</span><span>{content.secondHalf[lang]}</span></h1>
    </StyledHello>
  );
};

export default Hello;
