import styled from "styled-components";

const StyledFooter = styled.footer`
  display: grid;
  gap: 5px;
  font-size: 0.75em;
  color: ${(props) => (props.darkTheme ? "#ccc" : "#333")};
  text-align: center;
  & a {
    color: ${(props) => (props.darkTheme ? "white" : "black")}
  }
`;

const Footer = (props) => {
  return <StyledFooter darkTheme={props.darkTheme}>
    <div>Powered by lorem-ipsum.js</div>
    <div><a href="">Source</a></div>
    </StyledFooter>;
};

export default Footer;
