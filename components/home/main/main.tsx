import Background from "./background";
import Foreground from "./foreground";
import styles from "./main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <Background className={styles.background} />
      <Foreground className={styles.foreground} />
    </main>
  );
}
