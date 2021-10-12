import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledAPIUsage = styled.main`
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 20px;
  width: 100%;
  max-width: 800px;
  article {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 1em #aaa;
  }
  h2,
  h3 {
    color: slateblue;
  }
  code {
    background-color: slateblue;
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
  }
  pre {
    background-color: #eee;
    padding: 5px;
    border-radius: 5px;
    color: black;
    border: 1px solid slateblue;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
  }
  th,
  td {
    border-bottom: 2px solid white;
    padding: 5px;
    text-align: center;
  }
  th {
    background-color: slateblue;
    color: white;
    white-space: nowrap;
    user-select: none;
  }
  tbody > tr > td {
    word-break: break-all;
  }
  tr:nth-child(odd) {
    background-color: #eee;
  }
`;

const APIUsage = () => {
  return (
    <>
      <Header></Header>
      <StyledAPIUsage>
        <h2>API Usage</h2>
        <article>
          <p>Basic usage</p>
          <pre>GET /api/:text</pre>
          <h3>Example</h3>
          <pre>GET /api/one two two three three three</pre>
          <p>Response</p>
          <pre>
            {`{
  "data": {
    "two": 2,
    "three": 2,
    "one": 1
  }
}`}
          </pre>
          <h3>Additional parameters</h3>
          <p>
            It's possible to sort the JSON response with the additional
            parameters <strong>sort</strong> and <strong>ascending</strong>.
          </p>
          <p>Reference</p>
          <table>
            <tr>
              <th>Option</th>
              <th>Values</th>
            </tr>
            <tbody>
              <tr>
                <td>sort</td>
                <td>
                  <code>word</code> or <code>number</code>
                </td>
              </tr>
              <tr>
                <td>ascending</td>
                <td>
                  <code>true</code> or <code>false</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p>The default sort method is set to number and descending.</p>
          <h3>Example</h3>
          <pre>
            GET /api/one two two three three three?sort=name&ascending=false
          </pre>
        </article>
      </StyledAPIUsage>
      <Footer></Footer>
    </>
  );
};

export default APIUsage;
