import React, { useEffect, useState } from "react";
import ButtonBase from "../../components/common/ButtonBase";
import useScrollTop from "../../hooks/useScrollTop";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  ContentStyle,
  DescriptionContainerStyle,
  FlagContainerStyle,
  ListDetails,
  ListItemDetail,
  ListItemOption,
  ListItemResponse,
  TitleStyle,
  CountryButtonBack,
  FlagImageStyle,
} from "./countryDetails.style";
import { useParams, useLocation } from "react-router-dom";
import Countries from "../../api/countries";

const CountryDetails = () => {
  const [loading, setloading] = useState(true);
  const [countryObject, setcountry] = useState(null);
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    setloading(true);
    let mounted = true;
    const getC = async () => {
      try {
        const data = await (location.state?.country
          ? Countries.getByCode(location.state.country)
          : Countries.getByName(params.id));
        if (mounted) {
          setcountry(data && data[0] ? data[0] : null);
        }
      } catch (e) {
        if (mounted) {
          setcountry(null);
        }
      } finally {
        if (mounted) {
          setloading(false);
        }
      }
    };
    getC();
    return () => {
      console.log("abort");
      mounted = false;
    };
  }, [params.id, location.state?.country]);
  useScrollTop();
  return !loading ? (
    countryObject ? (
      <CountryDetailsContent
        img={countryObject.flags.png}
        country={countryObject.name.common}
        population={countryObject.population}
        region={countryObject.region}
        subRegion={countryObject.subregion}
        capital={countryObject.capital ? countryObject.capital[0] : ""}
        topLevelDomain={"150"}
        currencies={"15"}
        languages={"es"}
        borders={countryObject.borders}
      />
    ) : (
      <>
        <p>No se encontró el País solicitado.</p>
        <br />
        <CountryButtonBack />
      </>
    )
  ) : (
    <CountryDetailsLoading />
  );
};

const CountryDetailsContent = ({
  img,
  country,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) => {
  return (
    <div>
      <CountryButtonBack />
      <ContentStyle>
        <FlagContainerStyle>
          <FlagImageStyle src={img} alt={country} />
        </FlagContainerStyle>
        <DescriptionContainerStyle>
          <TitleStyle>{country}</TitleStyle>
          <ListDetails>
            <ListItemDetail>
              <ListItemOption>Native Name:</ListItemOption>
              <ListItemResponse>{country}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Top Level Domain:</ListItemOption>
              <ListItemResponse>{topLevelDomain}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Population:</ListItemOption>
              <ListItemResponse>{population}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Currencies:</ListItemOption>
              <ListItemResponse>{currencies}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Region:</ListItemOption>
              <ListItemResponse>{region}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Languages:</ListItemOption>
              <ListItemResponse>{languages}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Sub Region:</ListItemOption>
              <ListItemResponse>{subRegion}</ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemOption>Capital:</ListItemOption>
              <ListItemResponse>{capital}</ListItemResponse>
            </ListItemDetail>
          </ListDetails>
          <ListDetails noMargin>
            <ListItemDetail block noMargin>
              <ListItemOption>Border Countries</ListItemOption>
              <ListItemResponse>
                {borders?.map((b) => (
                  <ButtonBase
                    key={b}
                    className="borderCountry"
                    toHref={`/countries/${b}`}
                    state={{ country: `${b}` }}
                  >
                    {b}
                  </ButtonBase>
                ))}
              </ListItemResponse>
            </ListItemDetail>
          </ListDetails>
        </DescriptionContainerStyle>
      </ContentStyle>
    </div>
  );
};

const CountryDetailsLoading = () => {
  return (
    <div>
      <CountryButtonBack />
      <ContentStyle>
        {/* <FlagContainerStyle> */}
        <Skeleton height={"200px"} width={"280px"} className="loadingImg" />
        {/* </FlagContainerStyle> */}
        <DescriptionContainerStyle>
          <TitleStyle>
            <Skeleton height={25} width={280} />
          </TitleStyle>
          <ListDetails>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
            <ListItemDetail>
              <ListItemResponse>
                <Skeleton height={25} width={250} />
              </ListItemResponse>
            </ListItemDetail>
          </ListDetails>
          <ListDetails noMargin>
            <ListItemDetail block noMargin>
              <ListItemOption>
                <Skeleton height={25} width={100} />
              </ListItemOption>
              <ListItemResponse>
                <ListItemResponse>
                  <Skeleton height={25} width={100} />
                </ListItemResponse>
                <ListItemResponse>
                  <Skeleton height={25} width={100} />
                </ListItemResponse>
              </ListItemResponse>
            </ListItemDetail>
          </ListDetails>
        </DescriptionContainerStyle>
      </ContentStyle>
    </div>
  );
};

export default CountryDetails;
