import styled from 'styled-components';
import About from './About';
import Tools from './Tools';
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
      <About></About>
      <Tools></Tools>
      <Projects></Projects>
      <Contact></Contact>
    </StyledMain>
  )
}

export default Main;