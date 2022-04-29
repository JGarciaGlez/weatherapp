import { useState } from "react";
import { Error } from "./Error";

// eslint-disable-next-line react/prop-types
export const Form = ({ find, setFind, setQuery }) => {
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
    setQuery(true);
  };

  return (
    <>
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit}
      >
        {error ? <Error message="All fields are required" /> : null}
        <div className="col-12">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="city"
              className="form-control"
              id="city"
              value={city}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <div className="col-sm-10">
            <select
              name="country"
              className="form-select"
              value={country}
              onChange={handleChange}
            >
              <option value="">--Select a country--</option>
              <option value="US">--USA--</option>
              <option value="MX">--México--</option>
              <option value="AR">--Argentina--</option>
              <option value="CO">--Colombia--</option>
              <option value="CR">--Costa Rica--</option>
              <option value="ES">--Spain--</option>
              <option value="PE">--Perú--</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Find Weather
        </button>
      </form>
    </>
  );
};
