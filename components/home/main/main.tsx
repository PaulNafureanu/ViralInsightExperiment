import Background from "./background";
import styles from "./main.module.css";
import SearchBar from "components/home/searchbar/searchbar";

export default function Main() {
  return (
    <main className={styles.main}>
      <Background />
      <div>Hello World</div>

      {/* <div>
        <h1 className={styles.title}>ExPLORE VIRUSES</h1>
        <p className={styles.tagline}>
          Quickly explore viral structures from renewed scientific sources.
        </p>
      </div> */}
      {/* <SearchBar className={styles.searchbar} /> */}
    </main>
  );
}
