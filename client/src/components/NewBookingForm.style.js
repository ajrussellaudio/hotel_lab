import styled from "styled-components";
import { BaseButton } from "./shared.style";

export const Form = styled.form`
  color: rgb(51, 44, 58);
  display: grid;
  grid-template-columns: 10ch 1fr;
  padding: 1rem 2rem;
  row-gap: 1rem;
  border-bottom: 1px solid rgb(254, 254, 252);

  & label {
    grid-column: 1 / span 1;
  }

  & input,
  button,
  div {
    grid-column: 2 / span 1;
  }
`;

export const Button = styled(BaseButton)`
  background-color: rgb(33, 104, 105);
  color: rgb(254, 254, 252);
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  text-align: left;
`;
