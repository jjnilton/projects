import styled from "styled-components";

const StyledContactForm = styled.form`
  display: grid;
`;

const ContactForm = () => {
  return (
    <StyledContactForm>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
      <label htmlFor="email">E-mail</label>
      <input id="email" type="text" />
      <label htmlFor="phone"></label>
      <input id="phone" type="text" />
      <label htmlFor="post"></label>
      <textarea id="post" type="text" />
      <button>Submit</button>
    </StyledContactForm>
  );
};

export default ContactForm;
