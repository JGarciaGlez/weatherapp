import styles from "./Weather.module.css";

// eslint-disable-next-line react/prop-types
export const Weather = ({ result }) => {
  // eslint-disable-next-line react/prop-types
  const { name, main } = result;
  const kelvin = 273.15;

  if (!name) return null;
  return (
    <>
      <div className={styles.data}>
        <div>{name}</div>
        <div>
          <span>Today &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span>
          {parseFloat(main.temp - kelvin, 10).toFixed(2)}ºC
        </div>
        <div>
          <p>
            <span>Máx Temp &nbsp;&nbsp;</span>
            {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} ºC
          </p>
        </div>
        <div>
          <p>
            <span>Min Temp &nbsp;&nbsp; </span>
            {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} ºC
          </p>
        </div>
      </div>
    </>
  );
};
