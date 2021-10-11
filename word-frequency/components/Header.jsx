import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: slateblue;
  color: white;
  & > div {
    padding: 10px;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    & > li {
      list-style: none;
      margin: 0;
      padding: 0;
      & > a {
        color: white;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <h1>Word Frequency App</h1>
        <nav>
          <ul>
            <li><a href="">API</a></li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
