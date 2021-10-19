import styled from 'styled-components';

const StyledBook = styled.li``;

const Book = (props) => {
  const bookTitle = props.title;
  const imgSrc = `https://covers.openlibrary.org/b/olid/${props.coverId}-M.jpg`;
  const imgAlt = `${props.title} book cover`;

  return (
    <StyledBook>
      <h3>{bookTitle}</h3>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{props.bookId}</h3>
    </StyledBook>
  )
}

export default Book;

