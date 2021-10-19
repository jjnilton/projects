import styled from 'styled-components';

const StyledBook = styled.li`
  list-style-type: none;
  border: 1px solid black;
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
      <h3>{bookTitle}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{props.bookId}</h3>
      <h3>{bookYear}</h3>
      <h3>{bookAuthors?.join(", ")}</h3>
      <h3>{bookSubject[0]}</h3>
    </StyledBook>
  )
}

export default Book;

