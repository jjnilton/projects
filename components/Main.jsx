import styled from "styled-components";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import PostView from "./PostView";

const StyledMain = styled.main`
  background: linear-gradient(to right, #f1a10a, #342303);
  padding-top: ${(props) =>
    props.postVisibility || props.newPostVisibility ? "90px" : "60px"};
  @media (max-width: 960px) {
    padding: 0px 10px;
    padding-top: ${(props) =>
      props.postVisibility || props.newPostVisibility ? "60px" : "30px"};
  }
`;

const Main = (props) => {
  return (
    <StyledMain
      postVisibility={props.postVisibility}
      newPostVisibility={props.newPostVisibility}
    >
      {props.newPostVisibility ? (
        <NewPostForm></NewPostForm>
      ) : props.postVisibility ? (
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
