export const Weather = ({ result }) => {
  const { name, main } = result;
  const kelvin = 273.15;

  if (!name) return null;
  return (
    <>
      <div>{name}</div>
      <div>{parseFloat(main.temp - kelvin, 10).toFixed(2)}ºC</div>
      <div>
        <p>
          Máx Temp
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}ºC
        </p>
      </div>
      <div>
        <p>
          Min Temp
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}ºC
        </p>
      </div>
    </>
  );
};
