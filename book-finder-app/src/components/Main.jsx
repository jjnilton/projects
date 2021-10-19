import styled from 'styled-components';
import BookList from './BookList';
import BookSearch from './BookSearch';

const StyledMain = styled.main``;

const Main = () => {
  return <StyledMain>
    <BookSearch></BookSearch>
    <BookList></BookList>
  </StyledMain>
}

export default Main;