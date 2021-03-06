import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { Error } from "./components/Error";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Weather } from "./components/Weather";

function App() {
  const [find, setFind] = useState({
    city: "",
    country: "",
  });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = find;

  useEffect(() => {
    const queryAPI = async () => {
      if (query) {
        const appID = "f413cfd4f25ccbca86f4f60f534f055c";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appID}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setQuery(false);
        if (result.cod == "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    queryAPI();
  }, [query]);

  let component;

  if (error) {
    component = <Error message="Not Results found" />;
  } else {
    component = <Weather result={result} className={styles.data} />;
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <span>
            <Header title="Weather App" />
          </span>
        </header>
        <section className={styles.app}>
          <Form find={find} setFind={setFind} setQuery={setQuery} />
          <span className={styles.results}>{component}</span>
        </section>
      </div>
    </>
  );
}
export default App;
