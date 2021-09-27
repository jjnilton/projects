import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { useState } from "react";

const LANGUAGES = [
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "cs",
  "da",
  "de",
  "dz",
  "el",
  "en",
  "en-gb",
  "en-us",
  "es",
  "et",
  "fa",
  "fi",
  "fil",
  "fr",
  "he",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "is",
  "it",
  "ja",
  "ka",
  "kk",
  "km",
  "ko",
  "lb",
  "lo",
  "lt",
  "lv",
  "mk",
  "mn",
  "ms",
  "my",
  "ne",
  "no",
  "pl",
  "pt",
  "ro",
  "ru",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv",
  "sw",
  "th",
  "tk",
  "uk",
  "vi",
  "zh",
];

const StyledLogin = styled.div`
  background-color: lightblue;
  border-radius: 5px;
  min-width: 300px;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    column-gap: 5px;
    justify-content: center;
    & > label {
      grid-column: 1 / -1;
    }
    & > input {
      grid-column: 1 / -1;
    }
    & > label:not(:first-child) {
      margin-top: 5px;
    }
    & > input {
      width: 100%;
      height: 30px;
      border: 2px solid ${(props) => (props.invalidInput ? "red" : "royalblue")};
      border-radius: 5px;
      padding: 0 5px;
    }
    & > div {
      grid-column: 1 / -1;
      justify-self: right;
      display: flex;
      flex-direction: column;
      & > label[for="language"] {
        margin-top: 5px;
        grid-column: 1 / -1;
        font-size: 0.9em;
      }
      & > select#language {
        margin-top: 5px;
        padding: 5px;
        grid-column: 1 / -1;
      }
    }

    & > button,
    a {
      grid-column: 1 / -1;
      justify-self: center;
    }
    & > button {
      background-color: royalblue;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      margin-top: 10px;
      width: 100px;
    }
    & > a {
      margin-top: 20px;
      font-size: 0.8em;
      color: royalblue;
    }
    & .error-message {
      grid-column: 1 / -1;
      justify-self: center;
      text-align: center;
      color: red;
      margin-top: 10px;
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [invalidInput, setInvalidInput] = useState(false);

  const supportedLanguages = LANGUAGES.map((language) => {
    return <option key={language}>{language.toLocaleUpperCase()}</option>;
  });

  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;
    const language = event.target.language.value;

    if (username.length > 0 && password.length > 0) {
      dispatch(login({ language, username }));
    } else {
      setInvalidInput(true);
    }
  };

  const handleFocus = () => {
    setInvalidInput(false);
  };

  return (
    <StyledLogin invalidInput={invalidInput}>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Your username"
          onFocus={handleFocus}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Your password"
          onFocus={handleFocus}
        />
        {invalidInput && (
          <div className="error-message">
            Username and password can't be empty.
          </div>
        )}
        <div>
          <label htmlFor="language">Language</label>
          <select name="language" id="language">
            <option value="">Automatic</option>
            {supportedLanguages}
          </select>
        </div>
        <button>Login</button>
        <a href="https://ok">Forgot password</a>
      </form>
    </StyledLogin>
  );
};

export default Login;
