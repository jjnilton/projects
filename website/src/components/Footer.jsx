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
        <a href="https://">{content.source[lang]}</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
