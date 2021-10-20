import styled from "styled-components";
// import openlibraryLogo from '../openlibrary-logo.svg'
import { ReactComponent as OpenLibraryLogo } from "../openlibrary-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateBooks } from "../store";
import { useState } from "react";
import { useEffect } from "react";

const StyledBookSearch = styled.section`
  margin-bottom: 20px;
  display: grid;
  form {
    display: grid;
    grid-template-columns: 1fr max-content;
    box-shadow: 0 0 10px #ccc;
    border-radius: 5px;
    &:focus-within {
      box-shadow: 0 0 10px #aaa;
    }
    & > div {
      display: flex;
      border-radius: 5px;
      background-color: ${(props) => (props.isLoading ? "#e3e3e3" : "white")};
      & span {
        font-size: 2em;
        transform: rotate(-80deg);
        margin: 0 10px;
        color: gray;
        user-select: none;
      }
    }
  }
  & input {
    width: 100%;
    height: 2.5em;
    font-size: 1.2em;
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    padding-left: 5px;
    &:focus {
      outline: none;
      border-color: #ddd;
    }
    &:disabled {
      background-color: #e3e3e3;
    }
  }
  & button {
    background-color: #2c65ce;
    color: white;
    border: none;
    font-size: 1em;
    border-radius: 0 5px 5px 0;
    width: 200px;
    cursor: pointer;
    &:hover {
      background-color: #1a56fa;
    }
    &:focus {
      outline: 2px solid gray;
      border: 1px solid #eee;
    }
    &:disabled {
      background-color: #687994;
      color: #aaa;
      cursor: no-drop;
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
  const { isLoading } = useSelector((state) => state.books);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("query");

    const paramsObject = { q: query };
    const urlParams = new URLSearchParams(paramsObject);

    // prevent making a new request while there's one in progress
    if (isLoading) {
      return;
    }
    const fetchResult = async () => {
      dispatch(updateBooks({ bookList: [], isLoading: true }));
      try {
        const response = await fetch(
          encodeURI(`https://openlibrary.org/search.json?${urlParams}`)
        );
        const data = await response.json();
        console.log(data);
        dispatch(updateBooks({ bookList: data.docs, isLoading: false }));
      } catch (err) {
        dispatch(updateBooks({ bookList: [], isLoading: false }));
      }
    };

    fetchResult();
  };

  console.log("render");

  return (
    <StyledBookSearch isLoading={isLoading}>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <span>⌕</span>
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Search..."
            disabled={isLoading}
          />
        </div>
        <button disabled={isLoading}>Search</button>
      </form>
      <div>
        <span>Powered by</span>
        <a href="https://openlibrary.org/" target="_blank" rel="noreferrer">
          <OpenLibraryLogo></OpenLibraryLogo>
        </a>
      </div>
    </StyledBookSearch>
  );
};

export default BookSearch;
