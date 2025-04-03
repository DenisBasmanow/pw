import Link from "next/link";
import styles from "./not-found.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
    </div>
  )
}

export default NotFound;
