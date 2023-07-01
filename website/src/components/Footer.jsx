// import { useContext } from "react";
import styled from "styled-components";
// import Context from "../store/context";

const content = {
  source: { en: "Source", pt: "Código Fonte" },
  links: {
    github: "https://github.com/jjnilton",
    linkedin: "https://linkedin.com/in/jnrj",
    source: "https://github.com/jjnilton/website",
  },
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: 700px;
  text-align: center;
  font-size: 0.8em;
  padding: 24px 0;
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
    margin: 16px;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 16px;
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
  figure {
    display: grid;
    margin: 24px auto;
    max-width: 386px;
    & > blockquote {
      margin: 0;
    }
  }
  figcaption {
    filter: brightness(0.75);
    text-align: right;
  }
`;

const Footer = () => {
  // const { lang } = useContext(Context);
  return (
    <StyledFooter>
      <figure>
        <blockquote>
          <p>
            "There are far, far better things ahead than any we leave behind."
          </p>
        </blockquote>
        <figcaption>—C.S. Lewis</figcaption>
      </figure>
      <div>
        <ul>
          <li>
            <a href={content.links.github}>GitHub</a>
          </li>
          <li>
            <a href={content.links.linkedin}>LinkedIn</a>
          </li>
        </ul>
      </div>
      {/* <div>
        <span>
          <a href={content.links.source}>{content.source[lang]}</a>
        </span>
      </div> */}
    </StyledFooter>
  );
};

export default Footer;
