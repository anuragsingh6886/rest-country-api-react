import styled from "styled-components";

const CountryStyle = styled.article`
  box-shadow: 0 0 4px 4px ${({ theme: { BORDER } }) => BORDER};
  /* background-color: ${({ theme: { BACKGROUND } }) => BACKGROUND}; */
  background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS};
  flex: 1 0 0;
  cursor: pointer;
  margin: var(--gap);
  @media screen and (min-width: 780px) {
    flex: 0 0 calc(100% / var(--col) - (var(--gap) * 2));
  }
  @media screen and (min-width: 1200px) {
    --col: 4;
  }
`;

const CountryFlagStyle = styled.img`
  height: 150px;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;

const CountryHeaderStyle = styled.header`
  padding: 2rem 1.3rem;
  /* background-color: ${({ theme: { ELEMENTS } }) => ELEMENTS}; */
`;

const CountryTitleStyle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
`;

const CountryListStyle = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1rem;
    span {
      :first-child {
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export {
  CountryStyle,
  CountryFlagStyle,
  CountryListStyle,
  CountryHeaderStyle,
  CountryTitleStyle,
};
