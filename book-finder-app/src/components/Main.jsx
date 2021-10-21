import styled from "styled-components";
import BookList from "./BookList";
import BookSearch from "./BookSearch";

const StyledMain = styled.main`
  padding: 20px;
  min-width: 300px;
  max-width: 1000px;
  width: 100%;
  justify-self: center;
`;

const Main = () => {
  return (
    <StyledMain>
      <BookSearch></BookSearch>
      <BookList></BookList>
    </StyledMain>
  );
};

export default Main;
