import SearchBar from "components/home/searchbar/searchbar";
import styles from "./main.module.css";

export default function Foreground({ className }: { className: string }) {
  return (
    <div className={className}>
      <h1 className={styles.title}>ExPLORE VIRUSES</h1>
      <p className={styles.tagline}>
        Quickly explore viral structures from renewed scientific sources.
      </p>
    </div>
  );
  <SearchBar className={styles.searchbar} />;
}
