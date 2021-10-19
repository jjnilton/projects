import styled from "styled-components";

const StyledBook = styled.li`
  list-style-type: none;
  display: grid;
  border: 1px solid #ddd;
  border-radius: 5px;
  grid-template-rows: max-content max-content max-content 1fr 50px;
  justify-items: center;
  background-color: white;
  box-shadow: 0 0 10px #ccc;
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
    background-color: black;
    color: white;
    padding: 5px;
    margin: 20px;
    display: block;
    box-shadow: 0 5px 5px black;
    border-radius: 5px;
    /* border: 1px solid #333; */
  }
  & span {
    font-size: 0.75em;
  }
`;

const Book = (props) => {
  const bookTitle = props.title;
  const bookAuthors = props.authors;
  const bookYear = props.year;
  const bookId = props.bookId;
  const bookSubject = props.subject;
  const imgSrc = `https://covers.openlibrary.org/b/olid/${props.coverId}-M.jpg`;
  const imgAlt = `${props.title} book cover`;

  return (
    <StyledBook>
      <div>
        <h3>{bookTitle}</h3>
      </div>
      <span>{bookYear}</span>
      <div>{bookAuthors?.join(", ")}</div>
      <img src={imgSrc} alt={imgAlt} />
      <div>{bookSubject[0]}</div>
      <div>
        <a href={`https://openlibrary.org/${bookId}`} target="_blank">
          More info
        </a>
      </div>
    </StyledBook>
  );
};

export default Book;
