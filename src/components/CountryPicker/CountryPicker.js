import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [getContries, setGetContries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGetContries(await fetchCountries());
    };
    fetchAPI();
  }, [setGetContries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {getContries.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
