import classes from "./Modal.module.css";

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
      <Backdrop
        backDropClick={props.backDropClick}
        visible={props.visible}
      ></Backdrop>
      <div
        className={
          !props.visible
            ? `${classes.modal} ${classes.disappear}`
            : classes.modal
        }
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
