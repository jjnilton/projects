import styled, { keyframes } from "styled-components";
import Header from "./Header";
import PostView from "./PostView";

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
  animation: ${animation} 1s;
  z-index: 1;
`;

const FeaturedPost = (props) => {
  return (
    <StyledFeaturedPost>
      <Header
        handlePostVisibility={props.handlePostVisibility}
        postVisibility={props.postVisibility}
        featuredPostVisibility={props.featuredPostVisibility}
        handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
        toggleContact={props.toggleContact}
        handleHomeVisibility={props.handleHomeVisibility}
      ></Header>
      <PostView
        handlePostVisibility={props.handlePostVisibility}
        postVisibility={props.postVisibility}
        postData={props.postData}
      ></PostView>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost;
