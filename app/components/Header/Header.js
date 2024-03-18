import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  
  return (
    <header>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.headerTitle}>
          AR
        </Link>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/projects" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
