import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  background-color: slateblue;
  color: white;
  & > div {
    padding: 20px;
    max-width: 700px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
  }
  h1 {
    & > a {
      color: white;
      text-decoration: none;
    }
  }
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    & > li {
      list-style: none;
      margin: 0;
      padding: 0;
      & > a {
        color: white;
      }
    }
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <StyledHeader>
      <div>
        <h1>
          <Link href="/">Word Frequency App</Link>
        </h1>
        <nav>
          <ul>
            <li>
              {router.pathname === "/" ? (
                <Link href="/api-usage">API</Link>
              ) : (
                <Link href="/">Back to App</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
