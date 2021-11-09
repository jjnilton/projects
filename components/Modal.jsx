import styled from "styled-components";
import Backdrop from "./Backdrop";

const StyledModal = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
  }
  & > h3 {
    text-align: center;
  }
`;

const Modal = (props) => {
  return (
    <>
      <Backdrop toggle={props.toggle}></Backdrop>
      <StyledModal>
        <button onClick={props.toggle}>X</button>
        {props.name && <h3>{props.name}</h3>}
        {props.children}
      </StyledModal>
    </>
  );
};

export default Modal;
