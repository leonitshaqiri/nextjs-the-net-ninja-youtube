import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Cillum commodo aliquip voluptate dolor. Ad labore aliqua reprehenderit
        ullamco laboris aliquip. In conseactetur culpa velit consectetur amet
        irure esse. Eiusmod consequat sunt consectetur pariatur minim proident
        velit elit. Irure ex laborum dolor fugiat consequat tempor mollit.
      </p>
      <p className={styles.text}>
        Cillum commodo aliquip voluptate dolor. Ad labore aliqua reprehenderit
        ullamco laboris aliquip. In consectetur culpa velit consectetur amet
        irure esse. Eiusmod consequat sunt consectetur pariatur minim proident
        velit elit. Irure ex laborum dolor fugiat consequat tempor mollit.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listening</a>
      </Link>
    </div>
  );
}
