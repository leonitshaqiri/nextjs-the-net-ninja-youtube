import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Cillum commodo aliquip voluptate dolor. Ad labore aliqua reprehenderit
        ullamco laboris aliquip. In consectetur culpa velit consectetur amet
        irure esse. Eiusmod consequat sunt consectetur pariatur minim proident
        velit elit. Irure ex laborum dolor fugiat consequat tempor mollit.
      </p>
      <p>
        Cillum commodo aliquip voluptate dolor. Ad labore aliqua reprehenderit
        ullamco laboris aliquip. In consectetur culpa velit consectetur amet
        irure esse. Eiusmod consequat sunt consectetur pariatur minim proident
        velit elit. Irure ex laborum dolor fugiat consequat tempor mollit.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listening</a>
      </Link>
      <Footer />
    </div>
  );
}
