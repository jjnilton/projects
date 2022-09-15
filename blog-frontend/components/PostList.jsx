import styled from "styled-components";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const StyledPostList = styled.article`
  row-gap: 60px;
  background: linear-gradient(90deg, #f1a10a 0%, #342303 100%);
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, minmax(900px, 960px));
  @media (max-width: 1900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
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

const ErrorMessage = styled.div`
  align-self: center;
  justify-self: center;
  grid-column: 1 / -1;
  font-size: 2em;
  color: white;
  text-align: center;
`;

const PostItem = dynamic(() => import("./PostItem"), { ssr: false });
const FeaturedPostItem = dynamic(() => import("./FeaturedPostItem"), {
  ssr: false,
});

const PostList = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [noMoreData, setNoMoreData] = useState(false);
  const [error, setError] = useState(false);
  const [loadMoreError, setLoadMoreError] = useState(false);

  useEffect(() => {
    // document.body.style.overflow = "auto";
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://stormy-shelf-93141.herokuapp.com/articles?_page=${currentPage}`
        );
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        setError(false);
      } catch {
        setIsLoading(false);
        setError(true);
      }
    };
    fetchData();
    const scrollListener = (e) => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
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
        setIsLoadingMore(true);
        try {
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
          setIsLoadingMore(false);
          setLoadMoreError(false);
        } catch {
          setLoadMoreError(true);
          setIsLoadingMore(false);
          setNoMoreData(false);
        }
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
        {isLoading ? <Loading></Loading> : postListItems}
        {error && (
          <div
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              fontSize: "2em",
              color: "white",
              textShadow: "0 6px 8px #000",
            }}
          >
            Something went wrong...
          </div>
        )}
        {!isLoadingMore && loadMoreError && (
          <ErrorMessage>Error loading more.</ErrorMessage>
        )}
        {isLoadingMore && <Loading></Loading>}
      </StyledPostList>
      {noMoreData && <ErrorMessage>No more data to load.</ErrorMessage>}
    </>
  );
};

export default PostList;
