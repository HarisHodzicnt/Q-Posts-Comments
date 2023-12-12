import withLogger from "@hoc/withLogger";
import MyLogo from "@assets/my-img.png";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <img src={MyLogo} className={styles.shimmer} />
        <p className={styles.loading}>Loading, have fun :)</p>
      </div>
    </div>
  );
};

export default withLogger(Loader);
