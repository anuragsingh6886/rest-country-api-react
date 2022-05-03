import styled from "styled-components";

const SelectStyle = styled.select`
  padding: 1rem;
  height: 50px;
  border: none;
  background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS};
  box-shadow: 0 0 4px 4px ${({ theme: { BORDER } }) => BORDER};
  color: inherit;
  cursor: pointer;
`;

export { SelectStyle };
