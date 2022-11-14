import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 4px solid aquamarine;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  border-radius: 1rem;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;
