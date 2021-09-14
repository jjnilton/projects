import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.backDropClick}></div>;
};

const Modal = (props) => {
  return (
    <>
      <Backdrop backDropClick={props.backDropClick}></Backdrop>
      <div className={classes.modal}>{props.children}</div>
    </>
  );
};

export default Modal;
