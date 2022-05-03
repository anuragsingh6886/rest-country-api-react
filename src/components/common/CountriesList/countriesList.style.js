import styled from "styled-components";

const CountriesListStyle = styled.div`
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  --col: 2;
  --gap: 1.5rem;
  @media screen and (min-width: 780px) {
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    margin-left: calc(var(--gap) * -1);
    margin-right: calc(var(--gap) * -1);
  }
`;

// const CountryItemStyle = styled.li``;

export { CountriesListStyle };
