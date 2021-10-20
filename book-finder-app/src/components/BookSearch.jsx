import styled from "styled-components";
// import openlibraryLogo from '../openlibrary-logo.svg'
import { ReactComponent as OpenLibraryLogo } from "../openlibrary-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateBooks } from "../store";

const StyledBookSearch = styled.section`
  margin-bottom: 20px;
  display: grid;
  form {
    display: grid;
    grid-template-columns: 1fr max-content;
    box-shadow: 0 0 10px #ccc;
    border-radius: 5px;
  }
  & input {
    width: 100%;
    height: 2.5em;
    font-size: 1.2em;
    border-width: 1px 0 1px 1px;
    border-color: gray;
    border-style: solid;
    border-radius: 5px 0 0 5px;
    padding: 10px;
    &:focus {
      outline: none;
      border-color: #ddd;
    }
  }
  & button {
    background-color: gray;
    color: white;
    border-width: 1px 1px 1px 0;
    border-color: gray;
    border-style: solid;
    border-radius: 0 5px 5px 0;
    width: 200px;
    cursor: pointer;
    &:hover {
      background-color: #aaa;
    }
    &:focus {
      outline: 2px solid gray;
      border: 1px solid #eee;
    }
  }
  & > div {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    margin: 10px 0px;
    justify-self: right;
    & span {
      margin-right: 5px;
      color: #111;
    }
  }
  svg {
    width: 120px;
  }
`;

const BookSearch = () => {
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
      console.log(data);
      dispatch(updateBooks({ bookList: data.docs, isLoading: false }));
    };

    fetchResult();
  };

  return (
    <StyledBookSearch>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="query">Search</label> */}
        <input type="text" id="query" name="query" placeholder="Search" />
        <button>Search</button>
      </form>
      <div>
        <span>Powered by</span>
        <a href="https://openlibrary.org/" target="_blank">
          <OpenLibraryLogo></OpenLibraryLogo>
        </a>
      </div>
    </StyledBookSearch>
  );
};

export default BookSearch;
