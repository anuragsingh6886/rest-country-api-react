import styled from "styled-components";
import ButtonBase from "../ButtonBase";

const ButtonStyle = styled(ButtonBase)`
  .icon {
    margin-right: 0.5rem;
    height: 1rem;
    fill: ${({ theme: { TEXT } }) => TEXT};
  }
  .text {
  }
`;

export { ButtonStyle };
