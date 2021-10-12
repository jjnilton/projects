import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  background: linear-gradient(slateblue, #4f468b);
  color: white;
  & > div {
    max-width: 800px;
    padding: 20px;
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
      /* white-space: nowrap; */
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
  a:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
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
