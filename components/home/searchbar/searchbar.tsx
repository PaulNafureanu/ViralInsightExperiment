import styles from "./searchbar.module.css";

interface Props {
  className: string;
}

export default function SearchBar({ className }: Props) {
  return (
    <div className={className}>
      <input
        className={styles.input}
        placeholder="Search by virus name, virus ID or viral DNA secquence..."
      />
    </div>
  );
}
