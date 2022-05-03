import React from "react";

import { SelectStyle } from "./select.style";

const Select = ({ data, placeholder, setregion, region }) => {
  const handleChange = (e) => {
    setregion(e.target.value);
  };
  return (
    <SelectStyle onChange={handleChange} value={region}>
      <option value="all">{placeholder}</option>
      {data.map(({ id, country }) => {
        return (
          <option key={id} value={country}>
            {country}
          </option>
        );
      })}
    </SelectStyle>
  );
};

export default Select;
