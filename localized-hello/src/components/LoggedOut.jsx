import { useDispatch } from "react-redux";
import styled from "styled-components";
import { reset } from "../store";

const StyledLoggedOut = styled.div`
  div:first-child {
    font-size: 2em;
  }
`;

const LoggedOut = (props) => {
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(reset());
  }, 3000);

  return (
    <StyledLoggedOut>
      <div>Have a great day {props.username}!</div>
      <div>Redirecting to login...</div>
    </StyledLoggedOut>
  );
};

export default LoggedOut;
