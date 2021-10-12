import styled from "styled-components";
import { useState } from "react";
import { Table } from "../components/Table";
import { Chart } from "../components/Chart";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StyledHome = styled.main`
  display: grid;
  margin-bottom: 20px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 380px));
  gap: 20px;
  padding: 0 20px;
  #result {
    & h2 {
      color: slateblue;
    }
    & > div {
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 0 1em #aaa;
      padding: 10px;
    }
  }
  ol {
    color: #333;
    padding: 0px 20px;
    margin: 0;
    & > li {
      padding: 0;
      margin: 0;
    }
  }
`;

const Home = () => {
  const [data, setData] = useState({});

  const handleDataUpdate = (data) => {
    setData(data);
  };

  return (
    <>
      <Header></Header>
      <StyledHome>
        <Form data={data} handleDataUpdate={handleDataUpdate}></Form>
        <div id="result">
          <h2>{Object.keys(data).length > 0 ? "Result" : "Instructions"}</h2>
          <div>
            {Object.keys(data).length > 0 ? (
              <>
                <Chart data={data}></Chart>
                <Table data={data}></Table>
              </>
            ) : (
              <>
                <ol>
                  <li>Enter a text</li>
                  <li>Press the Analyze button</li>
                  <li>See the results</li>
                </ol>
              </>
            )}
          </div>
        </div>
      </StyledHome>
      <Footer></Footer>
    </>
  );
};

export default Home;

