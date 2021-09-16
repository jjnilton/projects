import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

// add portals

const Backdrop = (props) => {
  return (
    <div
      className={
        !props.visible
          ? `${classes.backdrop} ${classes.disappear}`
          : classes.backdrop
      }
      onClick={props.backDropClick}
    ></div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop
          backDropClick={props.backDropClick}
          visible={props.visible}
        ></Backdrop>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <div
          className={
            !props.visible
              ? `${classes.modal} ${classes.disappear}`
              : classes.modal
          }
        >
          {props.children}
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
