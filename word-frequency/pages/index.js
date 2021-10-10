import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { useState } from "react";
import { Table } from "../components/Table";
import { Chart } from "../components/Chart";
import calculateOccurrences from "../utils/calculateOccurrences";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text")
    const occurrences = calculateOccurrences(text)

    setData(occurrences);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          defaultValue="Four Four Four Four One Two Two Three Three Three"
        ></textarea>
        <button>Calculate</button>
      </form>
      <div>Result: </div>
      <Table data={data}></Table>
      <Chart data={data}></Chart>
    </>
  );
};

export default Home;
