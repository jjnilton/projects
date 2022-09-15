import styled from "styled-components";
import ReadMoreIcon from "../public/read-more.svg";
import Image from "next/image";
import { sanitize } from "dompurify";

const StyledPostItem = styled.article`
  min-height: 320px;
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;

  @media (max-width: 1900px) {
    min-height: unset;
  }

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
    /* Wrapper */
    position: relative;

    @media (max-width: 1900px) {
      display: grid;
      align-items: unset;
      justify-content: center;
    }

    @media (max-width: 960px) {
      display: grid;
      align-items: unset;
      justify-content: unset;
    }
    & > div {
      /* Inner */
      position: relative;
      max-width: 480px;
      max-height: 250px;
      left: 80px;
      top: 35px;

      @media (max-width: 1900px) {
        position: static;
        max-width: 75%;
        display: grid;
        grid-template-rows: 0.5fr 1fr 1.25fr;
        margin: 5% auto;
      }

      @media (max-width: 960px) {
        position: static;
        margin: 20px;
        display: grid;
        row-gap: 10px;
        justify-self: center;
        align-self: center;
        width: 75%;
        padding: unset;
        display: unset;
        margin: 0 auto;
      }

      @media (max-width: 560px) {
        row-gap: 0px;
        margin: 10px;
      }
    }
  }

  h3 {
    /* Author */
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

    @media (max-width: 1900px) {
      position: static;
      font-size: 1.5vw;
    }

    @media (max-width: 960px) {
      font-size: 2.5vw;
      max-width: unset;
    }
    @media (max-width: 560px) {
      font-size: 16px;
      max-width: unset;
    }
  }

  h2 {
    /* Post Title */
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

    @media (max-width: 1900px) {
      position: static;
      font-size: 2vw;
      line-height: 40px;
      margin-top: 0.25vw;
    }

    @media (max-width: 1600px) {
      line-height: 36px;
      max-height: 76px;
    }
    @media (max-width: 1280px) {
      line-height: 26px;
      max-height: 56px;
    }

    @media (max-width: 960px) {
      font-size: 3.5vw;
      max-height: 80px;
      line-height: 40px;
      margin-top: unset;
    }

    @media (max-width: 760px) {
      max-height: 64px;
      line-height: 30px;
      margin-top: unset;
    }

    @media (max-width: 560px) {
      font-size: 20px;
      line-height: unset;
      max-height: 50px;
    }
  }

  h4 {
    /* Excerpt */
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

    @media (max-width: 1900px) {
      position: static;
      font-size: 1.25vw;
      line-height: 32px;
      margin-top: 0.75vw;
    }

    @media (max-width: 1600px) {
      line-height: 34px;
      margin-top: 0.75vw;
      max-height: 64px;
    }

    @media (max-width: 1440px) {
      font-size: 1.2vw;
      line-height: 22px;
      max-height: 64px;
    }

    @media (max-width: 1280px) {
      font-size: 1.5vw;
      line-height: 20px;
      max-height: 42px;
    }

    @media (max-width: 960px) {
      font-size: 2.5vw;
      line-height: 32px;
      max-height: 63px;
      margin-top: 0;
    }

    @media (max-width: 760px) {
      line-height: 22px;
      max-height: 43px;
    }

    @media (max-width: 560px) {
      display: none;
    }
  }

  & button {
    position: relative;
    width: 24px;
    height: 24px;
    left: 576px;
    top: 256px;
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

const imageLoader = () => {
  return `./read-more.svg`
}

const PostItem = (props) => {
  const handleClick = () => {
    props.handlePostVisibility(true, props.item);
    window.scrollTo(0, 0);
  };

  return (
    <StyledPostItem onClick={handleClick}>
      <div>
        <img
          src={props.item.imageUrl}
          alt={sanitize(props.item.title, {
            ALLOWED_TAGS: ["p"],
          })}
        />
      </div>
      <div>
        <div>
          <h3>{props.item.author}</h3>
          <h2
            dangerouslySetInnerHTML={{
              __html: sanitize(props.item.title, {
                ALLOWED_TAGS: ["p"],
              }),
            }}
          ></h2>
          <h4
            dangerouslySetInnerHTML={{
              __html: sanitize(props.item.article, {
                ALLOWED_TAGS: ["p"],
              }),
            }}
          ></h4>
        </div>
        <button onClick={handleClick}>
          <ImageContainer>
            <Image
              loader={imageLoader}
              src={ReadMoreIcon}
              alt="Read more"
              layout="fill"
              quality={100}
            />
          </ImageContainer>
        </button>
      </div>
    </StyledPostItem>
  );
};

export default PostItem;
