import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  source: { en: "Source", pt: "Código Fonte" },
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  font-size: 0.8em;
  padding: 10px;
  span::before {
    content: "\f121";
    font-family: "fontello";
    margin-right: 5px;
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }
  ul {
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 10px;
    justify-content: center;
    & > li {
      list-style-type: none;
    }
    & > li:first-child::before {
      content: "\f09b";
      font-family: "fontello";
      margin-right: 5px;
    }
    & > li:last-child::before {
      content: "\f0e1";
      font-family: "fontello";
      margin-right: 5px;
    }
  }
`;

const Footer = () => {
  const { lang } = useContext(Context);
  return (
    <StyledFooter>
      <blockquote>
        <p>"Open source is a commitment not a convenience."</p>
        <cite>Paul Cormier</cite>
      </blockquote>
      <div>
        <ul>
          <li>
            <a href="https://">GitHub</a>
          </li>
          <li>
            <a href="https://">LinkedIn</a>
          </li>
        </ul>
      </div>
      <div>
        <span>
          <a href="https://">
            {content.source[lang]}
          </a>
        </span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
