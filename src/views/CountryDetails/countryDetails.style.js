import styled from "styled-components";
import ButtonBack from "../../components/common/ButtonBack";

const noMarginBottom =
  () =>
  ({ noMargin }) =>
    noMargin
      ? `
        margin-bottom: 0;
    `
      : `
        margin-bottom: 1rem;
    `;
const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  .loadingImg {
    height: 200px !important;
    width: 100% !important;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    .loadingImg {
      height: 360px !important;
      width: 300px !important;
      margin-bottom: 0rem;
    }
  }
`;

const FlagContainerStyle = styled.div`
  background-color: red;
  flex: 0 0 200px;
  margin-bottom: 1.5rem;
  line-height: 0;
  @media screen and (min-width: 768px) {
    flex: 0 0 50%;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    flex: 0 0 35%;
  }
`;

const FlagImageStyle = styled.img`
  max-width: 100%;
  height: 100%;
  width: 100%;
`;
const DescriptionContainerStyle = styled.div`
  @media screen and (min-width: 768px) {
    padding: 2rem 0 2rem 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 0 2rem 4rem;
  }
`;
const TitleStyle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 900;
`;
const ListDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  ${noMarginBottom()}
`;

const ListItemDetail = styled.li`
  flex: 0 0 50%;
  min-width: 200px;
  ${noMarginBottom()}
  ${({ block }) =>
    block
      ? `
    flex-basis: 100%;
  `
      : ``}
`;
const ListItemOption = styled.span`
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;
const ListItemResponse = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  .borderCountry {
    margin: 0 1rem 1rem 0;
  }
`;

const CountryButtonBack = styled(ButtonBack)`
  margin-bottom: 2rem;
`;

export {
  ContentStyle,
  FlagContainerStyle,
  FlagImageStyle,
  DescriptionContainerStyle,
  TitleStyle,
  ListDetails,
  ListItemDetail,
  ListItemOption,
  ListItemResponse,
  CountryButtonBack,
};
