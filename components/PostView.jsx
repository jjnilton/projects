import styled from "styled-components";

const StyledPostView = styled.article``;

const PostView = (props) => {
  return (
    <StyledPostView>
      <h1>Post view</h1>
      {props.postData.title}
    </StyledPostView>
  );
};

export default PostView;
