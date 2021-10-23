import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../store/context';

const StyledHello = styled.section`
  font-size: 2em;
  text-align: center;
`;

const content = {
  en: "Hello, I'm jnrj, and this is my website?",
  pt: "Olá, eu sou o jnrj e este é o meu website?"
}

const Hello = () => {
  const { lang } = useContext(Context);

  console.log('from context', lang)

  return (
    <StyledHello>{content[lang]}</StyledHello>
  )
}

export default Hello;