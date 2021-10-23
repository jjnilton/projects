import styled from 'styled-components';

const StyledSettings = styled.section`

  div {

  }

`;

const Settings = () => {

  const handleLangChange = (event) => {
    console.log(event.target.innerText)
  }

  console.log(navigator.languages)

  return (
    <StyledSettings>
      <div>
        <span onClick={handleLangChange}>en</span>
        <span> | </span>
        <span>pt</span>
      </div>
    </StyledSettings>
  )
}

export default Settings;