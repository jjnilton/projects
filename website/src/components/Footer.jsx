import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  font-size: 0.8em;
  padding: 10px;
  a {
    color: black;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://">Source</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
