import styled from 'styled-components';

const StyledContact = styled.section`
  form {
    display: grid;
    gap: 5px;
    input, textarea {
      border: 2px solid black;
      font-size: 1em;
      height: 2em;
      padding: 5px;
      &:focus {
        outline: 1px solid gray;
      }
    }

    textarea {
      font-family: sans-serif;
      height: unset;
    }

    button {
      background-color: black;
      color: white;
      padding: 5px;
      border: none;
      font-size: 1em;
    }

  }
`;

const Contact = () => {
  return (
    <StyledContact>
      <h2>Contact</h2>
      <form action="">
        <label htmlFor="name">Name</label><input id="name" name="name" type="text" />
        <label htmlFor="email">E-mail</label><input id="email" email="email" type="text" />
        <label htmlFor="subject">Subject</label><input id="subject" name="subject" type="text" />
        <label htmlFor="message">Message</label><textarea id="message" name="message" type="text" rows="5" />
        <button>Send</button>
      </form>
    </StyledContact>
  )
}

export default Contact;