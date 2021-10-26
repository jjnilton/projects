import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const EMAIL = "username@address.com";

const content = {
  section: {
    title: { en: "Contact", pt: "Contato" },
  },
  label: {
    name: { en: "Name", pt: "Nome" },
    email: { en: "Email", pt: "E-mail" },
    subject: { en: "Subject", pt: "Assunto" },
    message: { en: "Message", pt: "Mensagem" },
    send: { en: "Send", pt: "Enviar" },
  },
  placeholder: {
    name: { en: "Your name", pt: "Seu nome" },
    email: { en: "Your email", pt: "Seu e-mail" },
    subject: { en: "The subject", pt: "O assunto" },
    message: { en: "Your message", pt: "Sua mensagem" },
  },
};

const StyledContact = styled.section`
  p {
    & > a {
      color: unset;
      font-weight: bold;
      text-decoration: unset;
      transition: background-color 0.2s, color 0.2s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  form {
    display: grid;
    gap: 5px;
    label {
      font-weight: bold;
    }
    label:not(label[for="subject"])::after {
      content: "*";
    }

    input,
    textarea {
      caret-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.primary};
      font-size: 1em;
      height: 2em;
      padding: 5px;
      &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.secondary};
      }
      &::placeholder {
        color: ${({ theme }) => theme.colors.secondary};
        opacity: 0.5;
      }
    }

    textarea {
      font-family: sans-serif;
      height: unset;
      resize: vertical;
      min-height: 100px;
    }

    button {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      padding: 5px;
      font-size: 1em;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      & > span::before {
        content: "\f1d8";
        font-family: "fontello";
        margin-right: 5px;
      }
      @media (hover: hover) {
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.secondary};
          border: 2px solid ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;

const Paragraph = (props) => {
  const p =
    props.lang === "en" ? (
      <p>
        You can reach me through my email:{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or use the form below.
      </p>
    ) : (
      <p>
        Entre em contato através do meu e-mail:{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo formulário abaixo.
      </p>
    );

  return p;
};

const Contact = () => {
  const { lang } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(new URLSearchParams(formData).toString());

    const sendMessage = async () => {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      console.log(await response);
      // console.log(await response.json());
    };

    sendMessage();
  };

  return (
    <StyledContact id="contact">
      <h2>{content.section.title[lang]}</h2>
      <Paragraph lang={lang}></Paragraph>
      <form onSubmit={handleSubmit} data-netlify="true">
        <label htmlFor="name">{content.label.name[lang]}</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={content.placeholder.name[lang]}
          required
        />
        <label htmlFor="email">{content.label.email[lang]}</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder={content.placeholder.email[lang]}
          required
        />
        <label htmlFor="subject">{content.label.subject[lang]}</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder={content.placeholder.subject[lang]}
        />
        <label htmlFor="message">{content.label.message[lang]}</label>
        <textarea
          id="message"
          name="message"
          type="text"
          rows="5"
          placeholder={content.placeholder.message[lang]}
          required
        />
        <input type="hidden" name="form-name" value="contact" />
        <button>
          <span>{content.label.send[lang]}</span>
        </button>
      </form>
    </StyledContact>
  );
};

export default Contact;
