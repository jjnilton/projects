import styled from "styled-components";
import { useSelector } from "react-redux";
import Book from "./Book";
import Loading from "./Loading";

const StyledBookList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const BookList = () => {
  const { bookList, isLoading, triggered } = useSelector(
    (state) => state.books
  );

  const bookListItems = bookList.map((item) => {
    return (
      <Book
        key={item.key}
        title={item.title}
        authors={item.author_name}
        year={item.first_publish_year}
        coverId={item.cover_edition_key}
        bookId={item.key}
        subject={item.subject || []}
      ></Book>
    );
  });

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <StyledBookList>{bookListItems}</StyledBookList>
      )}
      {!isLoading && triggered && !bookList.length && <div>Not found.</div>}
    </>
  );
};

export default BookList;
