import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../store/context';

const StyledHello = styled.section`
  font-size: 2em;
  text-align: center;
`;

const Hello = () => {
  const { lang } = useContext(Context);

  console.log('from context', lang)

  return (
    <StyledHello>Hello, I'm jnrj and this is my website?</StyledHello>
  )
}

export default Hello;