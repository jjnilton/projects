import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const content = {
  section : {
    title: { en: "Contact", pt: "Contato" },
  },
  label : {
    name: { en: "Name", pt: "Nome" },
    email: { en: "Email", pt: "E-mail" },
    subject: { en: "Subject", pt: "Assunto" },
    message: { en: "Message", pt: "Mensagem" },
    send: { en: "Send", pt: "Enviar" },
  },
  placeholder : {
    name: {en: "Your name", pt: "Seu nome"},
    email: {en: "Your email", pt: "Seu e-mail"},
    subject: {en: "The subject", pt: "O assunto"},
    message: {en: "Your message", pt: "Sua mensagem"}
  }

};

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
      resize: vertical;
      min-height: 100px;
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
      <h2>{content.section.title[lang]}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        tenetur.
      </p>
      <form action="">
        <label htmlFor="name">{content.label.name[lang]}</label>
        <input id="name" name="name" type="text" placeholder={content.placeholder.name[lang]} />
        <label htmlFor="email">{content.label.email[lang]}</label>
        <input id="email" email="email" type="text" placeholder={content.placeholder.email[lang]} />
        <label htmlFor="subject">{content.label.subject[lang]}</label>
        <input id="subject" name="subject" type="text" placeholder={content.placeholder.subject[lang]}/>
        <label htmlFor="message">{content.label.message[lang]}</label>
        <textarea id="message" name="message" type="text" rows="5" placeholder={content.placeholder.message[lang]}/>
        <button>{content.label.send[lang]}</button>
      </form>
    </StyledContact>
  );
};

export default Contact;
