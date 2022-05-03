import React from "react";
import { REGIONS } from "../../../../api/regions";
import Search from "../../../../components/common/Search";
import Select from "../../../../components/common/Select";
import { FormStyle } from "./formStyle.style";

const Form = ({ setregion, region, country, setcountry, loadingCountries }) => {
  return (
    <FormStyle load={loadingCountries}>
      <Search country={country} setcountry={setcountry} />
      <Select
        placeholder={"Filter by Region"}
        data={REGIONS}
        setregion={setregion}
        region={region}
      />
    </FormStyle>
  );
};

export default Form;
