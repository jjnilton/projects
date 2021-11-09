import styled from "styled-components";
import DOMPurify from "dompurify";
import React from "react";

const StyledPostItem = styled.article``;

const PostItem = (props) => {
  const handleClick = () => {
    if (props.featured) {
      props.homeRef.current.style.transform = "translateX(-100%)";
      props.homeRef.current.style.transition = "transform 1s";
      props.handleFeaturedPostVisibility(true);
      props.handlePostVisibility(false, props.item);
      setTimeout(() => {
        props.handleHomeVisibility(false);
        props.handlePostVisibility(true, props.item);
      }, 1000);
    } else {
      props.handlePostVisibility(true, props.item);
    }
  };

  return (
    <StyledPostItem>
      {/* <img src={props.item.imageUrl} alt={props.item.title} /> */}
      <h3>{props.item.author}</h3>
      <h2
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.item.title),
        }}
      ></h2>
      <h4
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.item.article),
        }}
      ></h4>
      <h1>{props.featured.toString()}</h1>
      <button onClick={handleClick}>More</button>
    </StyledPostItem>
  );
};

export default PostItem;
