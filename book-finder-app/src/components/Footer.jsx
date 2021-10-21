import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  padding: 10px;
  a {
    text-decoration: none;
    color: #225b91;
    &:hover {
      text-decoration: underline;
    }
  }
  div {
    color: #555;
    font-size: 0.75em;
  }
  div:last-of-type {
    margin-bottom: 5px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        Data from <a href="https://openlibrary.org">OpenLibrary</a>
      </div>
      <div>
        Icon made by{" "}
        <a href="https://www.freepik.com" title="Freepik" rel="noreferrer">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon" rel="noreferrer">
          Flaticon
        </a>
      </div>
      <a href="https://">{"</>"} Source</a>
    </StyledFooter>
  );
};

export default Footer;
