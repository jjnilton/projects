import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px;
  a {
    text-decoration: none;
    color: #2c65ce;
    &:hover {
      background-color: white;
      border-radius: 5px;
      padding: 3px 10px;
      transition: background-color .2s;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="#">{'</>'} Source</a>
    </StyledFooter>
  )
}

export default Footer;