import styled from "styled-components";
import DOMPurify from "dompurify";
import React from "react";
import ReadMoreIcon from "../public/read-more.svg";
import Image from "next/image";

const StyledFeaturedPostItem = styled.article`
  min-height: 640px;
  grid-column: 1 / -1;
  max-width: 1280px;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;

  @media (max-width: 1900px) {
    min-height: unset;
  }

  @media (max-width: 960px) {
    min-height: 320px;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: 100%;
    @media (max-width: 760px) {
      height: 50vw;
      object-fit: cover;
      min-height: 160px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  &:nth-child(odd) {
    margin-left: 640px;
    @media (max-width: 1900px) {
      margin-left: 33.3%;
    }

    @media (max-width: 960px) {
      margin-left: 0;
    }
  }

  &:nth-child(even) {
    @media (max-width: 1900px) {
      margin-right: 33.3%;
    }

    @media (max-width: 960px) {
      margin-right: 0;
    }
  }

  & > div:last-child {
    /* Wrapper */
    position: relative;
    @media (max-width: 1900px) {
      display: grid;
      justify-content: center;
      align-items: center;
    }
    & > div {
      /* Inner */
      position: absolute;
      width: 480px;
      height: 315px;
      left: 80px;
      top: 163px;

      @media (max-width: 1900px) {
        position: static;
        height: unset;
        width: unset;
        width: 360px;
        display: grid;
        row-gap: 10px;
      }

      @media (max-width: 1280px) {
        position: static;
        height: unset;
        width: 75%;
        display: grid;
        row-gap: 10px;
        justify-self: center;
      }

      @media (max-width: 760px) {
        width: unset;
        margin: 20px;
      }
    }
  }

  h3 {
    /* Author */
    position: absolute;
    width: 214px;
    height: 35px;
    left: 0px;
    top: 24px;

    /* Default Text */
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    /* identical to box height */

    /* Text Color */
    color: #2d2d2d;

    white-space: nowrap;

    @media (max-width: 1900px) {
      position: static;
      height: unset;
      font-size: 1.5vw;
    }

    @media (max-width: 1280px) {
    }

    @media (max-width: 960px) {
      font-size: 2.5vw;
    }

    @media (max-width: 560px) {
      font-size: 20px;
    }
  }

  h2 {
    /* Post Title */
    position: absolute;
    height: calc(103px - 10px);
    left: 0%;
    right: 0%;
    top: 83px;

    /* Card Title */
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;

    /* Text Gradient */
    color: #f1a10a;
    overflow: hidden;
    text-overflow: clip;
    @media (max-width: 1900px) {
      position: static;
      font-size: 2vw;
    }

    @media (max-width: 1280px) {
      line-height: 26px;
      height: calc(103px - 20px);
    }

    @media (max-width: 960px) {
      font-size: 3.6vw;
      line-height: 43px;
      height: calc(103px - 10px);
    }

    @media (max-width: 760px) {
      font-size: 3.6vw;
      line-height: 43px;
      height: unset;
    }

    @media (max-width: 560px) {
      font-size: 24px;
      line-height: 32px;
      height: unset;
      max-height: 64px;
    }
  }

  h4 {
    position: absolute;
    height: 109px;
    left: 0%;
    right: 0%;
    top: 196px;

    /* Default Text */
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    /* Text Color */
    color: #2d2d2d;

    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 1900px) {
      position: static;
      font-size: 1.25vw;
    }

    @media (max-width: 1280px) {
      font-size: 1.5vw;
      line-height: 24px;
      height: calc(109px - 36px);
    }

    @media (max-width: 960px) {
      font-size: 2.5vw;
      line-height: 24px;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  button {
    position: relative;
    width: 24px;
    height: 24px;
    left: 576px;
    top: 576px;
    background-color: unset;
    border: none;
    cursor: pointer;

    @media (max-width: 1900px) {
      position: absolute;
      top: unset;
      left: unset;
      right: 5%;
      bottom: 12%;
    }

    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

const FeaturedPostItem = (props) => {
  const handleClick = () => {
    props.homeRef.current.style.transform = "translateX(-100%)";
    props.homeRef.current.style.transition = "transform 1s";
    props.handleFeaturedPostVisibility(true);
    props.handlePostVisibility(false, props.item);
    setTimeout(() => {
      props.handleHomeVisibility(false);
      props.handlePostVisibility(true, props.item);
    }, 1000);
  };

  return (
    <StyledFeaturedPostItem featured={props.featured} onClick={handleClick}>
      <div>
        <img src={props.item.imageUrl} alt={props.item.title} />
      </div>
      <div>
        <div>
          <h3>{props.item.author}</h3>
          <h2
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.item.title, {
                ALLOWED_TAGS: ["p"],
              }),
            }}
          ></h2>
          <h4
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.item.article, {
                ALLOWED_TAGS: ["p"],
              }),
            }}
          ></h4>
        </div>
        <button onClick={handleClick}>
          <ImageContainer>
            <Image
              src={ReadMoreIcon}
              alt="Read more"
              layout="fill"
              quality={100}
            />
          </ImageContainer>
        </button>
      </div>
    </StyledFeaturedPostItem>
  );
};

export default FeaturedPostItem;
