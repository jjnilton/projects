import { useSelector } from "react-redux";
import styled from "styled-components";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import Welcome from "./Welcome";

const StyledMain = styled.main`
  padding: 20px;
  min-width: 300px;
  max-width: 1000px;
  width: 100%;
  justify-self: center;
`;

const Main = () => {
  const { triggered } = useSelector((state) => state.books);
  return (
    <StyledMain>
      <BookSearch></BookSearch>
      {!triggered ? <Welcome></Welcome> : <BookList></BookList>}
    </StyledMain>
  );
};

export default Main;
