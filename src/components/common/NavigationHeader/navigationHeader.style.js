import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS};
  box-shadow: 0 2px 4px 4px ${({ theme: { BORDER } }) => BORDER};
  padding: 2rem 1rem;
`;

const HeaderContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TextStyle = styled.h1`
  font-weight: 800;
  font-size: 1.1rem;
  margin: 0;
  cursor: pointer;
`;
const ThemeStyle = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  .icon {
    height: 1rem;
    width: 1rem;
    .st0 {
      ${({ active }) => (active ? `fill: yellow` : "fill:#fff")}
    }
    .st1 {
      fill: none;
      stroke: #231f20;
      stroke-width: 50;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
    }
  }

  .text {
    margin-left: 0.5rem;
    font-weight: 600;
  }
`;

export { HeaderStyle, TextStyle, ThemeStyle, HeaderContentStyle };
