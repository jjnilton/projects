import styled from "styled-components";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const StyledPostList = styled.article``;

const PostItem = dynamic(() => import("./PostItem"), { ssr: false });

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
      // console.log(data);
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
    <StyledPostList>
      {isLoading ? <p>Loading...</p> : postListItems}
      {noMoreData && <div>No more data to load.</div>}
    </StyledPostList>
  );
};

export default PostList;
