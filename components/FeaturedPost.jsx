import styled, { keyframes } from "styled-components";
import Header from "./Header";
import Main from "./Main";

const animation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledFeaturedPost = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${animation} .3s ease-out;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
  & > header {
    position: absolute;
  }
`;

const FeaturedPost = (props) => {
  return (
    <StyledFeaturedPost>
      <Header
        postVisibility={props.postVisibility}
        featuredPostVisibility={props.featuredPostVisibility}
        newPostVisibility={props.newPostVisibility}
        toggleContact={props.toggleContact}
        toggleNewPost={props.toggleNewPost}
        handlePostVisibility={props.handlePostVisibility}
        handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
        handleHomeVisibility={props.handleHomeVisibility}
      ></Header>
      <Main
        postData={props.postData}
        postVisibility={true}
        newPostVisibility={props.newPostVisibility}
        toggleNewPost={props.toggleNewPost}
        handlePostVisibility={props.handlePostVisibility}
      ></Main>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost;
