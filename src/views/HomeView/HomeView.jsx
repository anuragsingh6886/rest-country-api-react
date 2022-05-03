import React, { useEffect, useMemo, useState } from "react";
import COUNTRIES_API from "../../api/countries";
import CountriesList from "../../components/common/CountriesList";
import useScrollTop from "../../hooks/useScrollTop";
import Form from "./components/Form/Form";
import { HomeViewStyle } from "./homeView.style";

const HomeView = () => {
  useScrollTop();
  const [countries, setcountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [region, setregion] = useState("all");
  const [country, setcountry] = useState("");

  useEffect(() => {
    let mounted = true;
    const d = async () => {
      setLoadingCountries(true);
      try {
        const data =
          region === "all"
            ? await COUNTRIES_API.all()
            : await COUNTRIES_API.getByRegion(region);
        if (mounted) {
          setcountries(data);
        }
      } catch (e) {
        if (mounted) {
          setcountries([]);
        }
      } finally {
        if (mounted) {
          setLoadingCountries(false);
        }
      }
    };
    d();
    return () => {
      mounted = false;
    };
  }, [region]);

  const search_countries = useMemo(() => {
    return !country
      ? countries
      : countries.filter(({ name: { common: commonName } }) =>
          commonName.toLowerCase().startsWith(country)
        );
  }, [country, countries]);

  return (
    <HomeViewStyle>
      <Form
        setregion={setregion}
        region={region}
        country={country}
        setcountry={setcountry}
        loadingCountries={loadingCountries}
      />
      <CountriesList loading={loadingCountries} countries={search_countries} />
    </HomeViewStyle>
  );
};

export default HomeView;
