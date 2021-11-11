import styled from "styled-components";
import DOMPurify from "dompurify";
import { useEffect } from "react";

const StyledPostView = styled.article`
  position: absolute;
  height: 1612px;
  left: 16.67%;
  right: 16.67%;
  top: 200px;
  background-color: white;

  @media (max-width: 1900px) {
    position: static;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: unset;
    max-width: 66.6%;
    margin: 0 auto;
    margin-top: 100px;
    row-gap: 5vw;
  }

  @media (max-width: 1280px) {
    margin-top: 100px;
    max-width: 90%;
    margin-top: 8%;
  }

  @media (max-width: 760px) {
    max-width: 92%;
    margin-top: 12%;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin-top: 12%;
  }

  & > img {
    position: absolute;
    width: 640px;
    height: 640px;
    left: 0px;
    top: 0px;
    @media (max-width: 1900px) {
      position: static;
      width: 100%;
      height: 100%;
    }
  }

  & > div:first-of-type {
    /* Intro */

    position: absolute;
    min-height: 640px;
    right: 0px;
    top: 0px;
    left: 640px;

    background: #ffffff;
    @media (max-width: 1900px) {
      position: static;
      min-height: unset;
      width: unset;
      display: grid;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 560px) {
      justify-content: unset;
    }
  }

  & > div:first-of-type > div {
    /* Intro Inner */

    position: absolute;
    max-width: 400px;
    height: 236px;
    left: calc(50% - 400px / 2);
    top: calc(50% - 236px / 2);
    @media (max-width: 1900px) {
      position: static;
      max-width: 66.6%;
      margin: 0 auto;
    }

    @media (max-width: 960px) {
      position: static;
      margin: 0 auto;
    }
    @media (max-width: 560px) {
      max-width: unset;
      padding: 0 10%;
    }
  }

  & > div:first-of-type > div {
    @media (max-width: 1900px) {
      display: grid;
    }
    @media (max-width: 1280px) {
      display: grid;
      height: unset;
      row-gap: 10px;
    }
    & > div:first-of-type {
      /* Date */

      position: absolute;
      width: 98px;
      height: 26px;
      left: 0px;
      top: 0px;

      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 26px;

      /* Primary Brand Color */
      color: #032937;
      white-space: nowrap;

      @media (max-width: 1900px) {
        position: static;
        width: unset;
      }
      @media (max-width: 1280px) {
        font-size: 16px;
      }
    }

    & > div:last-of-type {
      /* Author */

      position: absolute;
      width: 320px;
      height: 83px;
      left: 0px;
      top: 70px;

      /* Default Text */
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 34px;

      @media (max-width: 1900px) {
        position: static;
        width: unset;
      }

      @media (max-width: 1280px) {
        font-size: 20px;
        height: unset;
      }
    }

    & > h2 {
      /* Post Title */

      position: absolute;
      width: 400px;
      height: 118px;
      left: 0%;
      right: 0%;
      top: 131px;

      /* Card Title */
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 43px;

      /* Text Gradient */
      color: #f1a10a;

      margin: 0;

      @media (max-width: 1900px) {
        position: static;
        height: unset;
      }

      @media (max-width: 1280px) {
        font-size: 26px;
        line-height: 33px;
        margin-top: 18px;
      }

      @media (max-width: 960px) {
        font-size: 22px;
        line-height: 29px;
        margin-top: 14px;
        width: unset;
      }
    }
  }

  & > div:last-of-type {
    /* Post Content */
    position: absolute;
    max-width: 780px;
    height: 680px;
    left: 50%;
    top: 764px;
    transform: translateX(-50%);

    /* Default Text */
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;

    /* Text Color */
    color: #2d2d2d;
    @media (max-width: 1900px) {
      position: static;
      grid-column: 1 / -1;
      height: unset;
      margin: 0 auto;
      margin-bottom: calc(5vw * 3);
      transform: unset;
      max-width: 66.6%;
    }

    @media (max-width: 560px) {
      font-size: 16px;
      line-height: 28px;
      max-width: unset;
      padding: 0 10%;
    }
  }
`;

const PostView = (props) => {
  const formatDate = (dateString) => {
    const formatedDate = new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return formatedDate;
  };

  return (
    <StyledPostView>
      <img
        src={props.postData.imageUrl}
        alt={DOMPurify.sanitize(props.postData.title, {
          ALLOWED_TAGS: ["p"],
        })}
      />
      <div>
        <div>
          <div>{formatDate(props.postData.date)}</div>
          <div>{props.postData.author}</div>
          <h2
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.postData.title, {
                ALLOWED_TAGS: ["p"],
              }),
            }}
          ></h2>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(props.postData.article, {
            ALLOWED_TAGS: ["p"],
          }),
        }}
      ></div>
    </StyledPostView>
  );
};

export default PostView;
