import styled from "styled-components";
import openBookImage from "../open-book.png";

const StyledHeader = styled.header`
  color: #333;
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  padding-top: 20px;
  img {
    width: 50px;
    filter: contrast(0.1) sepia(1) hue-rotate(150deg) saturate(1.5);
    margin-right: 10px;
  }

  h1 {
    color: #555;
    @media (max-width: 320px) {
      font-size: 2em;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={openBookImage} alt="Book Finer App Logo"></img>
      <h1>Book Finder App</h1>
    </StyledHeader>
  );
};

export default Header;
