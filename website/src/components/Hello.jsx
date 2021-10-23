import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../store/context';

const content = {
  en: "Hello, I'm jnrj, and this is my website?",
  pt: "Olá, eu sou o jnrj e este é o meu website?"
}

const StyledHello = styled.section`
  font-size: 2em;
  text-align: center;
  color: ${ ({theme}) => theme.colors.primary};
`;

const Hello = () => {
  const { lang, theme } = useContext(Context);

  console.log('from context', lang)
  console.log('from context', theme)

  return (
    <StyledHello>{content[lang]}</StyledHello>
  )
}

export default Hello;