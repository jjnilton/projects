import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: slateblue;
  color: white;
  padding: 20px;
  text-align: center;
  a {
    color: white;
  }
  span::before {
    margin-right: 5px;
    font-family: 'fontello';
    content: '\f121';
    text-decoration: none;
  }
`;

const Footer = () => {
  return <StyledFooter><span><a href="https://source">Source</a></span></StyledFooter>;
};

export default Footer;
