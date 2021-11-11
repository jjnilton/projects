import styled from "styled-components";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const StyledPostList = styled.article`
  /* padding-top: 160px; */
  margin-top: 60px;
  row-gap: 60px;
  background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(900px, 960px));

  @media (max-width: 1900px) {
    grid-template-columns: 960px;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
  @media (max-width: 560px) {
    row-gap: 30px;
  }

  & > article:nth-child(3n):not(:nth-child(6n)) + article,
  article:nth-child(3n):not(:nth-child(6n)) + article + article {
    grid-template-columns: 2fr 1fr;
    & > div:first-child {
      order: 1;
    }
    & > div:last-child {
      order: -1;
    }
  }
`;

const PostItem = dynamic(() => import("./PostItem"), { ssr: false });
const FeaturedPostItem = dynamic(() => import("./FeaturedPostItem"), {
  ssr: false,
});

const PostList = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://stormy-shelf-93141.herokuapp.com/articles?_page=${currentPage}`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };
    fetchData();
    const scrollListener = (e) => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        setBottom(true);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  useEffect(() => {
    if (bottom && !noMoreData) {
      const fetchData = async () => {
        const response = await fetch(
          `https://stormy-shelf-93141.herokuapp.com/articles?_page=${
            currentPage + 1
          }`
        );
        const data = await response.json();
        if (data.length < 10) {
          setNoMoreData(true);
        }
        setData((prevData) => prevData.concat(data));
        setBottom(false);
        setCurrentPage((currentPage) => (currentPage += 1));
      };
      fetchData();
    }
  }, [bottom]);

  const postListItems = data?.map((item, index) => {
    if ((index + 1) % 3 === 0) {
      return (
        <FeaturedPostItem
          key={item.id}
          item={item}
          handlePostVisibility={props.handlePostVisibility}
          featured={(index + 1) % 3 === 0}
          homeRef={props.homeRef}
          toggleContact={props.toggleContact}
          featuredPostVisibility={props.featuredPostVisibility}
          handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
          handleHomeVisibility={props.handleHomeVisibility}
        ></FeaturedPostItem>
      );
    }
    return (
      <PostItem
        key={item.id}
        item={item}
        handlePostVisibility={props.handlePostVisibility}
        featured={(index + 1) % 3 === 0}
        homeRef={props.homeRef}
        toggleContact={props.toggleContact}
        featuredPostVisibility={props.featuredPostVisibility}
        handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
        handleHomeVisibility={props.handleHomeVisibility}
      ></PostItem>
    );
  });

  return (
    <>
      <StyledPostList>
        {isLoading ? <p>Loading...</p> : postListItems}
      </StyledPostList>
      {noMoreData && <div>No more data to load.</div>}
    </>
  );
};

export default PostList;
