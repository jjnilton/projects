import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledBookList = styled.article``;

const BookList = () => {
  const { bookList, isLoading } = useSelector(state => state.books);

  const bookListItems = bookList.map(item => {
    return <li>{item.title}</li>
  })

  return (
    <StyledBookList>
      {isLoading && <div>Loading...</div>}
      <ul>
        {bookListItems}
      </ul>
    </StyledBookList>
  );
};

export default BookList;
