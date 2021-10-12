import styled from "styled-components";

const StyledFooter = styled.footer`
  background: linear-gradient(slateblue, #4f468b);
  color: white;
  padding: 20px;
  text-align: center;
  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
  a {
    color: white;
  }
  span::before {
    margin-right: 5px;
    font-family: "fontello";
    content: "\f121";
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        <a href="https://source">Source</a>
      </span>
    </StyledFooter>
  );
};

export default Footer;
