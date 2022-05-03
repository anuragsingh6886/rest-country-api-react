import styled from "styled-components";

const FormStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${({ load }) =>
    load &&
    `
  pointer-events: none;
`}
`;

export { FormStyle };
