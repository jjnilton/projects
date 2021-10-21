import styled from 'styled-components';

const StyledWelcome = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #444;
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      Welcome to Book Finder App! Enter a text above to, well, find a book.
    </StyledWelcome>
  )
}

export default Welcome;