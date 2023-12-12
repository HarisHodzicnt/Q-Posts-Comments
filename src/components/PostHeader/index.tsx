import { useNavigate } from "react-router-dom";
import withLogger from "@hoc/withLogger";
import { IPostHeaderProps } from "@root/interfaces/IComponentsInterfaces";

import styles from "./PostHeader.module.css";

const PostHeader = ({
  title,
  renderBack,
  route,
  buttonText,
}: IPostHeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className={styles.postHeader}>
      <div className={styles.title}>{title}</div>
      {renderBack && (
        <button className={styles.goBack} onClick={() => navigate(route)}>
          {buttonText}
        </button>
      )}
    </header>
  );
};

export default withLogger(PostHeader);
