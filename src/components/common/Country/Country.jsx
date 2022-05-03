import React from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  CountryFlagStyle,
  CountryHeaderStyle,
  CountryListStyle,
  CountryStyle,
  CountryTitleStyle,
} from "./country.style";

const Country = ({ src, name, population, region, capital, loading }) => {
  return loading ? (
    <CountryLoading />
  ) : (
    <CountryDefault
      src={src}
      name={name}
      population={population}
      region={region}
      capital={capital}
    />
  );
};

const CountryDefault = ({ src, name, population, region, capital }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/countries/${name}`);
  };
  return (
    <CountryStyle onClick={handleClick}>
      <CountryFlagStyle src={src} alt={name} />
      <CountryHeaderStyle>
        <CountryTitleStyle>{name}</CountryTitleStyle>
        <CountryListStyle>
          <li>
            <span>Population:</span>
            <span>{population}</span>
          </li>
          <li>
            <span>Region:</span>
            <span>{region}</span>
          </li>
          <li>
            <span>Capital:</span>
            <span>{capital}</span>
          </li>
        </CountryListStyle>
      </CountryHeaderStyle>
    </CountryStyle>
  );
};

const CountryLoading = () => {
  return (
    <CountryStyle>
      <Skeleton height={150} />
      <CountryHeaderStyle>
        <CountryTitleStyle>
          <Skeleton height={25} width={"100%"} />
        </CountryTitleStyle>
        <CountryListStyle>
          <li>
            <Skeleton height={25} />
          </li>
          <li>
            <Skeleton height={25} />
          </li>
          <li>
            <Skeleton height={25} />
          </li>
        </CountryListStyle>
      </CountryHeaderStyle>
    </CountryStyle>
  );
};

export default Country;
