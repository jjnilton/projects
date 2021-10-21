import styled from "styled-components";
import { StyledButton } from "./Button";
import { keyframes } from "styled-components";

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledBook = styled.li`
  animation: ${animation} 1s;
  list-style-type: none;
  display: grid;
  border-radius: 5px;
  grid-template-rows: max-content max-content max-content 1fr 50px;
  justify-items: center;
  background-color: white;
  box-shadow: 0 0 10px #aaa;
  & h3 {
    margin-bottom: 0;
  }
  img {
    margin: 10px;
    align-self: center;
  }
  & div {
    text-align: center;
  }
  & a {
    text-decoration: none;
    background-color: #3da73d;
    color: white;
    padding: 5px;
    margin: 20px;
    display: block;
    box-shadow: 0 5px 5px #aaa;
    border-radius: 5px;
    border: 1px solid #689068;
    &:hover {
      background-color: #39c839;
    }
  }
  & span {
    font-size: 0.75em;
  }
`;

const MoreInfoButton = (props) => {
  return (
    <StyledButton as="a" href={props.url} target="_blank" rel="noreferrer">
      More info
    </StyledButton>
  );
};

const Book = (props) => {
  const bookTitle = props.title;
  const bookAuthors = props.authors;
  const bookYear = props.year;
  const bookId = props.bookId;
  const bookSubject = props.subject;
  const imgSrc = props.coverId
    ? `https://covers.openlibrary.org/b/olid/${props.coverId}-M.jpg`
    : "https://fakeimg.pl/160x240/?text=No Cover";
  const imgAlt = `${props.title} book cover`;

  return (
    <StyledBook>
      <div>
        <h3>{bookTitle}</h3>
      </div>
      <span>{bookYear}</span>
      <div>{bookAuthors?.join(", ")}</div>
      <img src={imgSrc} alt={imgAlt}/>
      <div>{bookSubject[0]}</div>
      <div>
        <MoreInfoButton
          url={`https://openlibrary.org/${bookId}`}
        ></MoreInfoButton>
      </div>
    </StyledBook>
  );
};

export default Book;
