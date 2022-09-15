import styled from "styled-components";
import Image from "next/image";
import PencilIcon from "../public/pencil.svg";
import Photo from "../public/photo.svg";

const StyledNewPostForm = styled.section`
  position: absolute;
  height: 1612px;
  left: 16.67%;
  right: 16.67%;
  top: 200px;
  background: #ffffff;

  display: grid;
  align-items: center;
  grid-template-rows: repeat(3, max-content);
  padding: 0 18.6%;

  &::after {
    position: absolute;
    content: "";
    bottom: -10%;
    height: 10%;
    width: 1px;
  }

  @media (max-width: 1280px) {
    position: static;
    height: 100%;
    padding-bottom: 10%;
    margin: 0 auto;
    margin-top: 100px;
    max-width: 90%;
    margin-top: 8%;
    margin-bottom: 10%;
  }

  @media (max-width: 760px) {
    max-width: 92%;
    margin-top: 12%;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    margin-top: 12%;
    padding: 0 5% 10% 5%;
  }

  @media (max-width: 560px) {
    row-gap: 16px;
  }

  & > h2 {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #f1a10a;
    margin: 0;
    margin-bottom: 48px;
    transition: all 0.5s;
    @media (max-width: 560px) {
      font-size: 30px;
      margin-bottom: 5%;
    }
  }

  & > form {
    display: grid;
    row-gap: 48px;
    transition: all 0.5s;
    @media (max-width: 560px) {
      row-gap: 16px;
    }
  }

  label {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    display: block;
    margin-bottom: 4px;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  input,
  textarea {
    /* Text Color */
    border: 1px solid #2d2d2d;
    border-radius: 4px;
    width: 100%;
    height: 60px;
    font-size: 24px;
    padding: 0 18px;

    @media (max-width: 1280px) {
      height: 48px;
    }

    @media (max-width: 560px) {
      font-size: 16px;
      height: 48px;
    }
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.51);
  }

  textarea {
    font-family: "Rubik" !important;
    height: 200px;
    resize: none;
    padding-top: 16px;
  }

  button {
    width: 254px;
    height: 60px;
    justify-self: center;
    border: none;
    background: #2d2d2d;
    border-radius: 4px;
    cursor: pointer;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: white;
    text-align: left;
    margin-top: calc(81px - 48px);
    & > span {
      margin-right: 27px !important;
      margin-left: 34px !important;
    }
  }
`;

const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 106px;
  margin-bottom: 78px;
  transition: all 0.5s;

  @media (max-width: 1280px) {
    margin-top: 10%;
    margin-bottom: 8%;

    & img {
      transition: all 0.5s;
      width: unset;
      height: unset;
      max-width: 300px !important;
    }
  }

  @media (max-width: 560px) {
    & img {
      width: unset;
      height: unset;
      max-width: 200px !important;
    }
  }
`;

const photoLoader = () => {
  return `./photo.svg`
}

const pencilLoader = () => {
  return `./pencil.svg`
}

const NewPostForm = () => {
  return (
    <StyledNewPostForm>
      <ImageContainer>
        <Image loader={photoLoader} src={Photo}></Image>
      </ImageContainer>
      <h2>New Post</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="Fill the title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input id="author" type="text" placeholder="Fill the author name" />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input id="image" type="text" placeholder="Fill the image URL" />
        </div>
        <div>
          <label htmlFor="post">Post</label>
          <textarea id="post" type="text" placeholder="Post..." />
        </div>
        <button>
          <Image loader={pencilLoader} src={PencilIcon}></Image>Create Post
        </button>
      </form>
    </StyledNewPostForm>
  );
};

export default NewPostForm;
