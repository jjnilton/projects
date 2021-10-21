import styled from 'styled-components';

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px;
  a {
    text-decoration: none;
    color: #518abe;
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