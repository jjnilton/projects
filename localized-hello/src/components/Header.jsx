import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: royalblue;
  color: white;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Localized Hello with Geo-IP Data App</h1>
    </StyledHeader>
  );
};

export default Header;
