import styled from "styled-components";
import Backdrop from "./Backdrop";
import CloseIcon from "../public/close.svg";
import Image from "next/image";

const StyledModal = styled.div`
  /* Modal */

  width: 810px;
  height: 1113px;
  padding: 91px 123px;

  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;

  @media (max-width: 1280px) {
    top: 35%;
  }

  @media (max-width: 960px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    height: unset;
    padding: 91px calc(123px / 2);
    top: 25%;
  }

  @media (max-width: 560px) {
    padding: 91px calc(123px / 4);
    top: 20%;
  }

  & > button {
    position: absolute;
    top: 42px;
    right: 41px;
    background-color: unset;
    border: none;
    cursor: pointer;
    @media (max-width: 560px) {
      top: 12px;
      right: 11px;
    }
  }
  & > h3 {
    text-align: center;
    /* Page Title */
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    color: #f1a10a;
    margin: 0;
    margin-bottom: 49px;
    @media (max-width: 560px) {
      margin-bottom: calc(49px / 2);
      font-size: 28px;
    }
  }
`;

const Modal = (props) => {
  return (
    <>
      <Backdrop toggle={props.toggle}></Backdrop>
      <StyledModal>
        <button onClick={props.toggle}>
          <Image src={CloseIcon}></Image>
        </button>
        {props.name && <h3>{props.name}</h3>}
        {props.children}
      </StyledModal>
    </>
  );
};

export default Modal;
