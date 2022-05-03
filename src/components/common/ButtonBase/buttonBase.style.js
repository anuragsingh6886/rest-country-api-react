import styled from "styled-components";

const ButtonBaseStyle = styled.button`
  border: none;
  background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS};
  color: ${({ theme: { TEXT } }) => TEXT};
  box-shadow: 0 0 3px 3px ${({ theme: { BORDER } }) => BORDER};
  padding: 0.438rem 1.2rem;
  font-size: 1rem;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export { ButtonBaseStyle };
