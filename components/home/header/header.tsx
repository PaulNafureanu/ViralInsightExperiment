import styles from "./header.module.css";

export default function Header() {
  const menus = ["About", "Catalog", "How to use", "Submit", "Contact"];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span className={styles.logo}>Logo</span>
        <ul className={styles.navList}>
          {menus.map((menu, index) => (
            <li key={index} className={styles.listItem}>
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
