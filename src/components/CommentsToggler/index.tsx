import withLogger from "@root/hoc/withLogger";
import { ICommentSectionProps } from "@root/interfaces/IComponentsInterfaces";
import { Suspense, lazy } from "react";
import useToggle from "@root/hooks/useToggle";

import styles from "./CommentsToggler.module.css";

const Comments = lazy(() => import("@components/Comments"));

const CommentsToggler = (props: ICommentSectionProps) => {
  const { show: showComments, toggleShow } = useToggle();
  const toggleComments = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleShow();
  };
  const buttonText = showComments ? "Hide " : "Show ";
  return (
    <>
      <div className={styles.moreComments}>
        <button onClick={toggleComments}>{buttonText}comments</button>
      </div>
      {showComments && (
        <Suspense fallback="Comments loading ...">
          <Comments {...props} />
        </Suspense>
      )}
    </>
  );
};

export default withLogger(CommentsToggler);
