import styled from "styled-components";
import DOMPurify from "dompurify";
import React from "react";
import ReadMoreIcon from "../public/Vector.svg";
import Image from "next/image";

const StyledPostItem = styled.article`
  min-height: 320px;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;
  @media (max-width: 960px) {
    min-height: unset;
  }

  img {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  & > div:last-child {
    position: relative;
    @media (max-width: 960px) {
      display: grid;
      align-items: center;
    }

    & > div {
      position: relative;
      max-width: 480px;
      max-height: 250px;
      left: 80px;
      top: 35px;
      @media (max-width: 960px) {
        position: static;
        margin: 20px;
        display: grid;
        row-gap: 10px;
      }

      @media (max-width: 560px) {
        row-gap: 0px;
        margin: 10px;
      }
    }
  }

  h3 {
    position: absolute;
    max-width: 160px;
    max-height: 35px;
    left: 0px;
    top: 0px;

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
    @media (max-width: 960px) {
      position: static;
      max-width: unset;
    }

    @media (max-width: 760px) {
      font-size: 18px;
    }
  }

  h2 {
    position: absolute;
    max-width: 443px;
    max-height: 85px;
    left: 0px;
    top: 42px;

    /* Card Title */
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;

    /* Text Gradient */
    color: #f1a10a;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 960px) {
      position: static;
    }

    @media (max-width: 760px) {
      font-size: 20px;
      line-height: unset;
    }

    @media (max-width: 560px) {
      font-size: 20px;
      line-height: unset;
      max-height: 50px;
    }
  }

  h4 {
    position: absolute;
    max-height: 97px;
    left: 0%;
    right: 0%;
    top: 140px;

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

    @media (max-width: 960px) {
      position: static;
    }

    @media (max-width: 760px) {
      font-size: 16px;
      line-height: 24px;
      max-height: 67px;
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
    top: 256px;
    background-color: unset;
    border: none;
    cursor: pointer;
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

const PostItem = (props) => {
  const handleClick = () => {
    props.handlePostVisibility(true, props.item);
  };

  return (
    <StyledPostItem onClick={handleClick}>
      <div>
        <img
          src={props.item.imageUrl}
          alt={DOMPurify.sanitize(props.item.title, {
            ALLOWED_TAGS: ["p"],
          })}
        />
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
          <Image
            src={ReadMoreIcon}
            alt="Read more"
            layout="fill"
            quality={100}
          />
        </button>
      </div>
    </StyledPostItem>
  );
};

export default PostItem;
