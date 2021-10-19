import styled from "styled-components";
import { useSelector } from "react-redux";
import Book from "./Book";

const StyledBookList = styled.article``;


const BookList = () => {
  const { bookList, isLoading } = useSelector(state => state.books);



  const bookListItems = bookList.map((item) => {
    return <Book key={item.key} title={item.title} coverId={item.cover_edition_key} bookId={item.key}>- </Book>
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
