import styled from 'styled-components';
import Contact from './Contact';
import Hello from './Hello';
import Projects from './Projects';

const StyledMain = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <StyledMain>
      <Hello></Hello>
      <Projects></Projects>
      <Contact></Contact>
    </StyledMain>
  )
}

export default Main;