import { Link } from "react-router-dom";
import withLogger from "@hoc/withLogger";
import { DEFAULT_GLOBAL_ERROR } from "@constants/global";
import { IGlobalErrorProps } from "@root/interfaces/IComponentsInterfaces";

import styles from "./GlobalError.module.css";

const GlobalError = ({ text = DEFAULT_GLOBAL_ERROR }: IGlobalErrorProps) => {
  return (
    <div className={styles.globalError}>
      {text} <Link to="/">Home</Link>
    </div>
  );
};

export default withLogger(GlobalError);
