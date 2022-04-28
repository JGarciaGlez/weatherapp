import React, { useState } from "react";
import { Error } from "./Error";

export const Form = ({ find, setFind,setQuery }) => {
  const [error, setError] = useState(false);

  const { city, country } = find;

  const handleChange = (e) => {
    setFind({
      ...find,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
    

    {error ? <Error message='All fields are required'/> : null}
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        ></input>
        <label htmlFor="country">Country:</label>;
        <select name="country" value={country} onChange={handleChange}>
          <option value="">--Select a country--</option>
          <option value="US">--USA--</option>
          <option value="MX">--México--</option>
          <option value="AR">--Argentina--</option>
          <option value="CO">--Colombia--</option>
          <option value="CR">--Costa Rica--</option>
          <option value="ES">--Spain--</option>
          <option value="PE">--Perú--</option>
        </select>
        <button type="submit">Find Weather</button>
      </form>
    </>
  );
};
