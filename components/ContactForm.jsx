import styled from "styled-components";
import SubmitFormIcon from "../public/submit-form.svg";
import Image from "next/image";

const StyledContactForm = styled.form`
  display: grid;
  row-gap: 48px;

  @media (max-width: 560px) {
    row-gap: 16px;
  }

  label {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    display: block;
    margin-bottom: 4px;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  input,
  textarea {
    /* Text Color */
    border: 1px solid #2d2d2d;
    border-radius: 4px;
    height: 60px;
    width: 100%;
    font-size: 24px;
    padding: 0 18px;
    @media (max-width: 560px) {
      font-size: 16px;
      height: 48px;
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.51);
  }

  textarea {
    font-family: "Rubik" !important;
    height: 200px;
    resize: none;
    padding-top: 16px;
  }

  button {
    width: 230px;
    height: 60px;
    justify-self: center;
    border: none;
    background: #2d2d2d;
    border-radius: 4px;
    cursor: pointer;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: white;
    text-align: left;
    margin-top: 72px;
    @media (max-width: 560px) {
      margin-top: 36px;
    }
    & > span {
      margin-right: 38px !important;
      margin-left: 34px !important;
    }
  }
`;

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Fill your full name" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" placeholder="Fill a valid e-mail" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" placeholder="Fill your phone" />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <textarea id="post" type="text" placeholder="Hello..." />
      </div>
      <button>
        <Image src={SubmitFormIcon}></Image>Submit
      </button>
    </StyledContactForm>
  );
};

export default ContactForm;
