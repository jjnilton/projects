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
          <li><a href="">GitHub</a></li>
          <li><a href="">LinkedIn</a></li>
        </ul>
      </div>
      <div>
        <a href="https://">{content.source[lang]}</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
