import React, { useRef, useState } from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";
import FeaturedPost from "../components/FeaturedPost";
import NewPostForm from "../components/NewPostForm";
import PostImage from "../public/photo.svg";

const StyledHome = styled.div``;

export default function Home() {
  const [postVisibility, setPostVisibility] = useState(false);
  const [postData, setPostData] = useState({});
  const [contactModalVisibility, setContactModalVisibility] = useState(false);
  const [newPostVisibility, setNewPostVisibility] = useState(false);
  const [featuredPostVisibility, setFeaturedPostVisibility] = useState(false);
  const [homeVisibility, setHomeVisibility] = useState(true);
  const homeRef = useRef();

  const handlePostVisibility = (status, data = postData) => {
    setPostVisibility(status);
    setPostData(data);
  };

  const toggleContactModalVisibility = () => {
    setContactModalVisibility((prevState) => !prevState);
  };

  const toggleNewPostVisibility = () => {
    setNewPostVisibility((prevState) => !prevState);
  };

  const handleFeaturedPostVisibility = (status) => {
    setFeaturedPostVisibility(status);
  };

  const handleHomeVisibility = (status) => {
    setHomeVisibility(status);
    setNewPostVisibility(false);
    setPostVisibility(false);
  };

  return (
    <>
      {contactModalVisibility && (
        <Modal name="Contact" toggle={toggleContactModalVisibility}>
          <ContactForm></ContactForm>
        </Modal>
      )}
      {featuredPostVisibility && (
        <FeaturedPost
          postData={postData}
          toggleContact={toggleContactModalVisibility}
          toggleNewPost={toggleNewPostVisibility}
          handlePostVisibility={handlePostVisibility}
          postVisibility={postVisibility}
          featuredPostVisibility={featuredPostVisibility}
          handleFeaturedPostVisibility={handleFeaturedPostVisibility}
          handleHomeVisibility={handleHomeVisibility}
          newPostVisibility={newPostVisibility}
          toggleNewPost={toggleNewPostVisibility}
        ></FeaturedPost>
      )}
      {homeVisibility && (
        <StyledHome ref={homeRef}>
          <>
            <Header
              handlePostVisibility={handlePostVisibility}
              postVisibility={postVisibility}
              toggleContact={toggleContactModalVisibility}
              toggleNewPost={toggleNewPostVisibility}
              handleHomeVisibility={handleHomeVisibility}
              handleFeaturedPostVisibility={handleFeaturedPostVisibility}
              newPostVisibility={newPostVisibility}
            ></Header>
            <Main
              handlePostVisibility={handlePostVisibility}
              postVisibility={postVisibility}
              postData={postData}
              homeRef={homeRef}
              toggleContact={toggleContactModalVisibility}
              featuredPostVisibility={featuredPostVisibility}
              handleFeaturedPostVisibility={handleFeaturedPostVisibility}
              handleHomeVisibility={handleHomeVisibility}
              newPostVisibility={newPostVisibility}
            ></Main>
          </>
        </StyledHome>
      )}
    </>
  );
}
