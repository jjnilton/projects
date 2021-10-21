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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const StyledLoadMoreButton = styled(StyledButton)`
  cursor: pointer;
  width: 200px;
  justify-self: center;
  background-color: #2c65ce;
  margin: 0;
  padding: 10px;
  font-size: 1em;
  margin: 20px 0;
  &:hover {
    background-color: #3779f5;
  }
  &:disabled {
    cursor: no-drop;
    background-color: gray;
    color: white;
    box-shadow: none;
    border: #aaa;
  }
  a {
    color: #3779f5;
  }
`;

const LoadMoreButton = (props) => {
  return (
    <StyledLoadMoreButton
      onClick={props.handleLoadMore}
      disabled={props.disabled}
    >
      {props.disabled ? "No more results" : "Load more"}
    </StyledLoadMoreButton>
  );
};

const ResultsCount = styled.section`
  padding: 10px 0px;
  color: #333;
`;

const NoResults = styled.div`
  font-size: 1.2em;
`;


const BookList = () => {
  const [visibleBookItems, setVisibleBookItems] = useState([]);
  const { bookList, isLoading, triggered, numFound } = useSelector(
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
    setVisibleBookItems(bookListItems.slice(0, 9));
    // eslint-disable-next-line
  }, [bookList]);

  const handleLoadMore = () => {
    setVisibleBookItems(bookListItems.slice(0, visibleBookItems.length + 9));
  };

  const disabled = visibleBookItems >= bookListItems;

  return (
    <StyledBookListWrapper>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          {triggered && bookListItems.length > 0 && (
            <>
              <ResultsCount>{bookListItems.length} results</ResultsCount>
              <StyledBookList>{visibleBookItems}</StyledBookList>
              <LoadMoreButton
                handleLoadMore={handleLoadMore}
                disabled={disabled}
              ></LoadMoreButton>
              {disabled && numFound > bookListItems.length && (
                <p style={{ textAlign: "center" }}>
                  See all the {numFound} results on{" "}
                  {/*eslint-disable-next-line */}
                  <a
                    href="https://openLibrary.org"
                    target="_blank"
                    rel="noopener"
                  >
                    OpenLibrary.org
                  </a>
                </p>
              )}
            </>
          )}
        </>
      )}
      {!isLoading && triggered && !bookList.length && (
        <NoResults>No results.</NoResults>
      )}
    </StyledBookListWrapper>
  );
};

export default BookList;
