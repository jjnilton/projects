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
    & > div > a {
      text-decoration: none;
      display: flex;
      gap: 10px;
      align-items: center;
      &:hover {
        filter: drop-shadow(0 0 2px #bbb);
      }
    }
  }
  img {
    filter: invert();
    width: 32px;
  }
  h1 {
    color: white;
    text-decoration: none;
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
        <div>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Word Frequency App Logo" />
              <h1>Word Frequency App</h1>
            </a>
          </Link>
        </div>
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
