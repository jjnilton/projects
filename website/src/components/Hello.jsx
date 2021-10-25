import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  firstHalf: {
    en: "Hello, I'm NAME, and",
    pt: "Olá, eu sou o NOME e"
  },
  secondHalf: {
    en: "this is my website.",
    pt: "este é o meu website."
  }
};

const StyledHello = styled.section`
  font-size: 2em;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  h1:first-child {
    font-size: 1em;
    margin-bottom: 0;

  }
  h1:last-child {
    margin-top: 0;
    /* border-bottom: 10px solid ${({ theme }) => theme.colors.secondary}; */
    display: inline-block;
  }
`;

const Hello = () => {
  const { lang } = useContext(Context);

  return (
    <StyledHello>
      <h1>{content.firstHalf[lang]}</h1>
      <h1>{content.secondHalf[lang]}</h1>
    </StyledHello>
  );
};

export default Hello;
