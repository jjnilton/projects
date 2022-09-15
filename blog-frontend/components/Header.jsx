import styled from "styled-components";
import Navigation from "./Navigation";
import Title from "./Title";

const StyledHeader = styled.header`
  position: ${(props) =>
    props.postVisibility || props.newPostVisibility ? "absolute" : "sticky"};
  top: 0;
  left: 0;
  background-color: #2d2d2d;
  height: 100px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: height 0.5s;
  @media (max-width: 960px) {
    height: 50px;
    padding: 0 10%;
  }
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Header = (props) => {
  const handleHome = (event) => {
    event.preventDefault();
    if (props.postVisibility) {
      props.handlePostVisibility(false);
    }

    if (props.featuredPostVisibility || props.newPostVisibility) {
      props.handleFeaturedPostVisibility(false);
      props.handleHomeVisibility(true);
    }

    props.handleHomeVisibility(true);
  };

  return (
    <StyledHeader
      postVisibility={props.postVisibility}
      newPostVisibility={props.newPostVisibility}
    >
      <Title handleHome={handleHome}></Title>
      <Navigation
        handlePostVisibility={props.handlePostVisibility}
        featuredPostVisibility={props.featuredPostVisibility}
        postVisibility={props.postVisibility}
        newPostVisibility={props.newPostVisibility}
        toggleContact={props.toggleContact}
        toggleNewPost={props.toggleNewPost}
        handleHome={handleHome}
      ></Navigation>
    </StyledHeader>
  );
};

export default Header;
