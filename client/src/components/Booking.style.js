import styled from "styled-components";
import { BaseButton } from "./shared.style";

export const Card = styled.div`
  border: 1px solid rgb(142, 158, 146);
  border-radius: 1rem;
  padding: 1rem;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: rgb(254, 254, 252);
  color: rgb(62, 0, 7);
  font-family: "Work Sans", sans-serif;
`;

export const Button = styled(BaseButton)`
  background-color: rgb(247, 23, 39);
  color: rgb(254, 254, 252);
`;

export const Name = styled.span`
  font-family: "Playfair Display", serif;
  font-size: 1.2rem;
`;

export const Email = styled.pre``;

export const Status = styled.button`
  color: ${(props) => (props.checkedIn ? "rgb(33, 104, 105)" : "rgb(247, 23, 39)")};
`;
