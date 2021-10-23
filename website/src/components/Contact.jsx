import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  contact: { en: 'Contact', pt: 'Contato'},
  name: {en: 'Name', pt: 'Nome'},
  email: {en: 'Email', pt: 'Email'},
  subject: {en: 'Subject', pt: 'Assunto'},
  message: {en: 'Message', pt: 'Mensagem'},
  send: {en: 'Send', pt: 'Enviar'}
}

const StyledContact = styled.section`
  form {
    display: grid;
    gap: 5px;
    label {
      font-weight: bold;
    }

    input,
    textarea {
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
  const { lang } = useContext(Context);
  return (
    <StyledContact>
      <h2>{content.contact[lang]}</h2>
      <form action="">
        <label htmlFor="name">{content.name[lang]}</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="email">{content.email[lang]}</label>
        <input id="email" email="email" type="text" />
        <label htmlFor="subject">{content.subject[lang]}</label>
        <input id="subject" name="subject" type="text" />
        <label htmlFor="message">{content.message[lang]}</label>
        <textarea id="message" name="message" type="text" rows="5" />
        <button>{content.send[lang]}</button>
      </form>
    </StyledContact>
  );
};

export default Contact;
