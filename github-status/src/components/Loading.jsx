import styled, { keyframes } from "styled-components";

const loadingEllipsis1 = keyframes`

    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }

`;
const loadingEllipsis2 = keyframes`
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
`;
const loadingEllipsis3 = keyframes`

    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }

`;

const StyledLoading = styled.div`
  margin: 0 auto;
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: ${loadingEllipsis1} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: ${loadingEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: ${loadingEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: ${loadingEllipsis3} 0.6s infinite;
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
