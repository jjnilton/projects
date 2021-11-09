import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Main from "../components/Main";
import Modal from "../components/Modal";

import FeaturedPost from "../components/FeaturedPost";

const StyledHome = styled.div`
  transform: translateX(0);
`;

export default function Home() {
  const [postVisibility, setPostVisibility] = useState(false);
  const [postData, setPostData] = useState({});
  const [contactModalVisibility, setContactModalVisibility] = useState(false);
  const [featuredPostVisibility, setFeaturedPostVisibility] = useState(false);
  const homeRef = useRef();
  const [homeVisibility, setHomeVisibility] = useState(true);

  const handlePostVisibility = (status, data = postData) => {
    setPostVisibility(status);
    setPostData(data);
  };

  const toggleContactModalVisibility = () => {
    setContactModalVisibility((prevState) => !prevState);
  };

  const handleFeaturedPostVisibility = (status) => {
    setFeaturedPostVisibility(status);
  };

  const handleHomeVisibility = (status) => {
    setHomeVisibility(status);
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
          handlePostVisibility={handlePostVisibility}
          postVisibility={postVisibility}
          featuredPostVisibility={featuredPostVisibility}
          handleFeaturedPostVisibility={handleFeaturedPostVisibility}
          handleHomeVisibility={handleHomeVisibility}
        ></FeaturedPost>
      )}
      {homeVisibility && (
        <StyledHome ref={homeRef}>
          <>
            <Header
              handlePostVisibility={handlePostVisibility}
              postVisibility={postVisibility}
              toggleContact={toggleContactModalVisibility}
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
            ></Main>
          </>
        </StyledHome>
      )}
    </>
  );
}
