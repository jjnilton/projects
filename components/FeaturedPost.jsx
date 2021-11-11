import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Header from "./Header";
import PostView from "./PostView";
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
  animation: ${animation} 1s;
  z-index: 1;
  background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;

  @media (max-width: 1280px) {
    padding-top: 100px;
  }
`;

const FeaturedPost = (props) => {
  useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);

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
