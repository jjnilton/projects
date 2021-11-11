import styled from "styled-components";

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Backdrop = (props) => {
  const handleClick = () => {
    props.toggle();
  };

  return <StyledBackdrop onClick={handleClick}></StyledBackdrop>;
};

export default Backdrop;
