import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import Context from "../store/context";

const appear = keyframes`
  from {
    transform: scale(1.25);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const content = {
  email: {
    en: "hi@jnrj.me",
    pt: "oi@jnrj.me",
  },
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
  form_submit_result: {
    success: {
      en: "Message sent successfully.",
      pt: "Mensagem enviada com sucesso.",
    },
    failure: {
      en: "Sorry, the message couldn't be sent. Try submitting again in a few moments or send an email directly.",
      pt: "Desculpe, não foi possível enviar a mensagem. Tente enviar novamente em alguns instantes ou envie diretamente por e-mail.",
    },
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
  /* refactor in a component */
  & > div {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    margin: 10px 0;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    animation: ${appear} 0.5s forwards;
    &::selection {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
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
        <a href={`mailto:${content.email[props.lang]}`}>
          {content.email[props.lang]}
        </a>{" "}
        or use the form below.
      </p>
    ) : (
      <p>
        Entre em contato através do meu e-mail:{" "}
        <a href={`mailto:${content.email[props.lang]}`}>
          {content.email[props.lang]}
        </a>{" "}
        ou pelo formulário abaixo.
      </p>
    );

  return p;
};

const Contact = () => {
  const { lang } = useContext(Context);
  const [formSent, setFormSent] = useState(false);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputFocus = () => {
    setFormSent(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const sendMessage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          window.location.host.includes("netlify")
            ? "/"
            : "https://jnrj.me/api/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
          }
        );
        setFormSent(true);
        if (response.ok) {
          setLoading(false);
          setSuccess(true);
          event.target.reset();
        } else {
          setLoading(false);
          setSuccess(false);
        }
      } catch (err) {
        setLoading(false);
        setFormSent(true);
        setSuccess(false);
      }
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
          onFocus={handleInputFocus}
        />
        <label htmlFor="email">{content.label.email[lang]}</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder={content.placeholder.email[lang]}
          required
          onFocus={handleInputFocus}
        />
        <label htmlFor="subject">{content.label.subject[lang]}</label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder={content.placeholder.subject[lang]}
          onFocus={handleInputFocus}
        />
        <label htmlFor="message">{content.label.message[lang]}</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder={content.placeholder.message[lang]}
          required
          onFocus={handleInputFocus}
        />
        <input type="hidden" name="form-name" value="contact" />
        <button>
          <span>{content.label.send[lang]}</span>
        </button>
      </form>
      {loading && <p>Sending...</p>}
      {!loading && formSent && success ? (
        <div>{content.form_submit_result.success[lang]}</div>
      ) : !loading && formSent && !success ? (
        <div>{content.form_submit_result.failure[lang]}</div>
      ) : undefined}
    </StyledContact>
  );
};

export default Contact;
