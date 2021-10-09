import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const text = formData.get("text");
  const words = text.split(" ");

  console.log(words)

  const occurrences = words.reduce((acc, curr) => {
    return acc[curr] = acc[curr] + 1 || 1, acc
  }, {})

  console.log(occurrences)

}


const Home = () => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <textarea name="text" id="text" cols="30" rows="10"></textarea>
        <button>Calculate</button>
      </form>
      <div>Result: </div>
    </>
  );
};

export default Home;
