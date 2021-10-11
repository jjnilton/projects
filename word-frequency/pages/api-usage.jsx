import styled from "styled-components";
import Header from "../components/Header";

const StyledAPIUsage = styled.main`
  max-width: 600px;
  margin: 20px auto;
  article {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 1em #aaa;
  }
`;

const APIUsage = () => {
  return (
    <>
      <Header></Header>
      <StyledAPIUsage>
        <article>
          <div>API Usage</div>
          <code>GET /api/:text</code>
          <h2>Example</h2>
          <code>GET /api/one two two three three three</code>
          <p>Result:</p>
          <pre>
            {`{
  "data": {
    "two": 2,
    "three": 2,
    "one": 1
  }
}`}
          </pre>
          <p>Additional parameters</p>
         
          <ul>
            <li>sort: word or number</li>
            <li>ascending: true or false</li>
          </ul>
          <code>GET /api/one two two three three three?sort=name&ascending=false</code>
        </article>
      </StyledAPIUsage>
    </>
  );
};

export default APIUsage;
