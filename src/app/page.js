import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "./ui/shared/header/header";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent></HeaderComponent>
    </main>
  );
}
