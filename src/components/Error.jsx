import styles from "./Error.module.css";
// eslint-disable-next-line react/prop-types
export const Error = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};
