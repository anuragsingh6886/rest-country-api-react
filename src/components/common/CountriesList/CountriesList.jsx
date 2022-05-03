import React, { useMemo } from "react";
import Country from "../Country/Country";
import { CountriesListStyle } from "./countriesList.style";

const CountriesList = ({ countries, loading, countLouding = 8 }) => {
  const countries_loading = useMemo(
    () => [...Array(countLouding)],
    [countLouding]
  );
  return (
    <>
      <CountriesListStyle>
        {!loading
          ? countries.map(
              ({
                flags,
                name: { common: commonName },
                population,
                region,
                capital,
              }) => {
                return (
                  <Country
                    key={commonName}
                    src={flags && flags.png}
                    name={commonName}
                    population={population}
                    region={region}
                    capital={capital ? capital[0] : ""}
                  />
                );
              }
            )
          : countries_loading.map((e, i) => <Country loading key={i} />)}
      </CountriesListStyle>
    </>
  );
};

export default CountriesList;
