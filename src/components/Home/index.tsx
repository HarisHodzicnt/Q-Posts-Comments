import { Link } from "react-router-dom";
import withLogger from "@hoc/withLogger";
import PDFViewerTsx from "@components/PDFViewer/index.tsx";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.homeTitle}>Welcome to the Q Agency</h1>
      <div className={styles.homeNote}>
        In next sections you can find route to Posts and Comments + my CV, have
        fun :D
      </div>
      <div className={styles.link}>
        <span>Link to: </span>
        <Link to="/posts">Posts & Comments</Link>
      </div>
      <PDFViewerTsx />
    </div>
  );
};

export default withLogger(Home);
