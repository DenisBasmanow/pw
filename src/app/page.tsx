import ClientNeko from "./components/ClientNeko/ClientNeko";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <ClientNeko />
      <div className={styles.center}>
        <Header />
        <Main />
      </div>
    </div>
  );
}
