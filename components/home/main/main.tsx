import styles from "./main.module.css";
import SearchBar from "components/home/searchbar/searchbar";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Explore Viruses</h1>
      <SearchBar className={styles.searchbar} />
    </main>
  );
}
