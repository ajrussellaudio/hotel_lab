import styled from "styled-components";

export const BaseButton = styled.button`
  display: flex;
  max-width: fit-content;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: scale 0.1s;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.95;
  }
`;
