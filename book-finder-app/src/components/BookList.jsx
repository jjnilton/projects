import styled from "styled-components";
import { useSelector } from "react-redux";
import Book from "./Book";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";
import { StyledButton } from "./Button";

const StyledBookListWrapper = styled.article`
  display: grid;
`;

const StyledBookList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const StyledLoadMoreButton = styled(StyledButton)`
  cursor: pointer;
  background-color: blue;
  margin: 0;
  &:hover {
    background-color: lightblue;
  }
  &:disabled {
    background-color: gray;
    color: white;
  }
`;

const LoadMoreButton = (props) => {
  return (
    <StyledLoadMoreButton
      onClick={props.handleLoadMore}
      disabled={props.disabled}
    >
      Load more
    </StyledLoadMoreButton>
  );
};

const BookList = () => {
  const [visibleBookItems, setVisibleBookItems] = useState([]);
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

  useEffect(() => {
    setVisibleBookItems(bookListItems.slice(0, 3));
    // eslint-disable-next-line
  }, [bookList]);

  const handleLoadMore = () => {
    setVisibleBookItems(bookListItems.slice(0, visibleBookItems.length + 3));
  };

  const disabled = visibleBookItems >= bookListItems;

  return (
    <StyledBookListWrapper>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          {triggered && (
            <>
              <StyledBookList>{visibleBookItems}</StyledBookList>
              <LoadMoreButton
                handleLoadMore={handleLoadMore}
                disabled={disabled}
              ></LoadMoreButton>
            </>
          )}
        </>
      )}
      {!isLoading && triggered && !bookList.length && <div>Not found.</div>}
    </StyledBookListWrapper>
  );
};

export default BookList;
