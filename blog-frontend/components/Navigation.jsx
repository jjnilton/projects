import styled from "styled-components";

const StyledNavigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 20px;
  align-items: center;
  & > li {
    list-style-type: none;
    font-size: 16px;
    transition: font-size 0.5s;
  }
  & > li:nth-child(1) {
    cursor: ${(props) =>
      (props.postVisibility || props.newPostVisibility) && "pointer"};
    position: absolute;
    left: 50.89%;
    right: 44.48%;
    top: 31%;
    bottom: 38%;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    @media (max-width: 960px) {
      position: static;
      font-size: 16px;
    }
  }

  & > li:nth-child(2) {
    cursor: pointer;
    position: absolute;
    left: 61.67%;
    right: 31.61%;
    top: 31%;
    bottom: 38%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    @media (max-width: 960px) {
      position: static;
      font-size: 16px;
    }
  }

  & > li:nth-child(3) {
    position: absolute;
    width: 170px;
    height: 56px;
    left: 75.15%;
    top: 22px;

    & > button {
      transition: all 0.5s;
      background-color: unset;
      border: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      cursor: pointer;

      background: #f1a10a;
      border-radius: 70px;

      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;

      color: #ffffff;
    }

    @media (max-width: 960px) {
      position: static;
      width: unset;
      height: unset;
      & > button {
        position: static;
        white-space: nowrap;
        width: unset;
        height: unset;
        font-size: 14px;
        @media (max-width: 320px) {
          & > span {
            display: none;
          }
          &::after {
            content: "New";
          }
        }
      }
    }
  }
`;

const Navigation = (props) => {
  const handleContact = () => {
    props.toggleContact();
  };
  const handleNewPost = () => {
    props.toggleNewPost();
  };

  return (
    <StyledNavigation
      postVisibility={props.postVisibility}
      newPostVisibility={props.newPostVisibility}
    >
      <li onClick={props.handleHome}>Posts</li>
      <li onClick={handleContact}>Contact</li>
      <li onClick={handleNewPost}>
        <button>
          <span>New Post</span>
        </button>
      </li>
    </StyledNavigation>
  );
};

export default Navigation;
