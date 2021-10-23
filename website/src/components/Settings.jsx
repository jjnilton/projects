import { useContext } from "react";
import styled from "styled-components";
import Context from "../store/context";

const StyledSettings = styled.section`
`;

const Settings = () => {
  const { setLanguage } = useContext(Context);

  const handleLangChange = (event) => {
    console.log(event.target.innerText);
    setLanguage(event.target.innerText);
  };

  // console.log(navigator.languages)

  return (
    <StyledSettings>
      <div>
        <span onClick={handleLangChange}>en</span>
        <span> | </span>
        <span onClick={handleLangChange}>pt</span>
      </div>
    </StyledSettings>
  );
};

export default Settings;
