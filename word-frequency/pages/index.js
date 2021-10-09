import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { useState } from "react";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => {
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text").trim();
    const words = text.split(" ");

    console.log(words);

    const occurrences = words.reduce((acc, curr) => {
      return (acc[curr] = acc[curr] + 1 || 1), acc;
    }, {});

    console.log(occurrences);

    const labels = Object.keys(occurrences);
    const values = Object.values(occurrences);

    const data = {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    setData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <button>Calculate</button>
      </form>
      <div>Result: </div>
      <Pie data={data} height={100} width={50}></Pie>
    </>
  );
};

export default Home;
