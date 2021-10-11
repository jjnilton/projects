import styled from "styled-components";
import { useState } from "react";
import { Table } from "../components/Table";
import { Chart } from "../components/Chart";
import Form from "../components/Form";
import Header from "../components/Header";

const StyledHome = styled.div`
  display: grid;
  max-width: 600px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
  #result {
    background-color: white;
    border-radius: 10px;
  }
`;

const Home = () => {
  const [data, setData] = useState([]);

  const handleDataUpdate = (data) => {
    setData(data);
  };

  return (
    <>
      <Header></Header>
      <StyledHome>
        <Form data={data} handleDataUpdate={handleDataUpdate}></Form>
        <div id="result">
          <div>Result</div>
          <Chart data={data}></Chart>
          <Table data={data}></Table>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
