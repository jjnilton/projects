import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateBooks } from "../store";

const StyledBookSearch = styled.section``;

const BookSearch = () => {
  const booksState = useSelector(state => state.books)
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get("query");

    const paramsObject = { q: query };
    const urlParams = new URLSearchParams(paramsObject);

    const fetchResult = async () => {
      dispatch(updateBooks({ bookList: [], isLoading: true }));
      const response = await fetch(
        encodeURI(`https://openlibrary.org/search.json?${urlParams}`)
      );
      const data = await response.json();
      dispatch(updateBooks({ bookList: data.docs, isLoading: false }));
    };

    fetchResult();
  };

  return (
    <StyledBookSearch>
      <form onSubmit={handleSubmit}>
        <label htmlFor="query">Search</label>
        <input type="text" id="query" name="query" />
        <button>Search</button>
      </form>
    </StyledBookSearch>
  );
};

export default BookSearch;