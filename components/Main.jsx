import styled from "styled-components";
import PostList from "./PostList";
import PostView from "./PostView";

const StyledMain = styled.main`
  padding-bottom: 60px;

  @media (max-width: 960px) {
    padding: 0px 10px;
  }
`;

const Main = (props) => {
  return (
    <StyledMain>
      {props.postVisibility ? (
        <PostView postData={props.postData}></PostView>
      ) : (
        <PostList
          handlePostVisibility={props.handlePostVisibility}
          postVisibility={props.postVisibility}
          homeRef={props.homeRef}
          toggleContact={props.toggleContact}
          featuredPostVisibility={props.featuredPostVisibility}
          handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
          handleHomeVisibility={props.handleHomeVisibility}
        ></PostList>
      )}
    </StyledMain>
  );
};

export default Main;
