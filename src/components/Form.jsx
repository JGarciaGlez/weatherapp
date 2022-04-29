import { useState } from "react";
import { Error } from "./Error";
import styles from "./Form.module.css";

// eslint-disable-next-line react/prop-types
export const Form = ({ find, setFind, setQuery }) => {
  const [error, setError] = useState(false);

  // eslint-disable-next-line react/prop-types
  const { city, country } = find;

  const handleChange = (e) => {
    setFind({
      ...find,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // eslint-disable-next-line react/prop-types
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {error ? <Error message="All fields are required" /> : null}
        <div>
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="city"
            value={city}
            onChange={handleChange}
          ></input>
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <div>
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
        <button type="submit" className={styles.button}>
          Find Weather
        </button>
      </form>
    </>
  );
};
