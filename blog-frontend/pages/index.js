import React, { useRef, useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";
import FeaturedPost from "../components/FeaturedPost";

const StyledHome = styled.div``;

export default function Home() {
  const [postData, setPostData] = useState({});
  const [postVisibility, setPostVisibility] = useState(false);
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
      <Head>
        <title>Blog Frontend App</title>
      </Head>
      {contactModalVisibility && (
        <Modal name="Contact" toggle={toggleContactModalVisibility}>
          <ContactForm></ContactForm>
        </Modal>
      )}
      {featuredPostVisibility && (
        <FeaturedPost
          postData={postData}
          postVisibility={postVisibility}
          featuredPostVisibility={featuredPostVisibility}
          newPostVisibility={newPostVisibility}
          toggleContact={toggleContactModalVisibility}
          toggleNewPost={toggleNewPostVisibility}
          toggleNewPost={toggleNewPostVisibility}
          handlePostVisibility={handlePostVisibility}
          handleHomeVisibility={handleHomeVisibility}
          handleFeaturedPostVisibility={handleFeaturedPostVisibility}
        ></FeaturedPost>
      )}
      {homeVisibility && (
        <StyledHome ref={homeRef}>
          <>
            <Header
              postVisibility={postVisibility}
              newPostVisibility={newPostVisibility}
              toggleContact={toggleContactModalVisibility}
              toggleNewPost={toggleNewPostVisibility}
              handlePostVisibility={handlePostVisibility}
              handleHomeVisibility={handleHomeVisibility}
              handleFeaturedPostVisibility={handleFeaturedPostVisibility}
            ></Header>
            <Main
              homeRef={homeRef}
              postData={postData}
              postVisibility={postVisibility}
              featuredPostVisibility={featuredPostVisibility}
              newPostVisibility={newPostVisibility}
              toggleContact={toggleContactModalVisibility}
              handlePostVisibility={handlePostVisibility}
              handleHomeVisibility={handleHomeVisibility}
              handleFeaturedPostVisibility={handleFeaturedPostVisibility}
            ></Main>
          </>
        </StyledHome>
      )}
    </>
  );
}
