import { useParams } from "react-router-dom";
import withLogger from "@hoc/withLogger";
import { ICommentProps } from "@root/interfaces/IComponentsInterfaces";
import { IComment } from "@root/interfaces/IComments";
import { fetchComments } from "@endpoints/comments";

import styles from "./Comments.module.css";
import useDynamicFetching from "@root/hooks/useDynamicFetching";

const Comments = ({ postId, inPostContainer }: ICommentProps) => {
  const { id } = useParams();

  const comments = useDynamicFetching<IComment[], number>(
    fetchComments<IComment[]>,
    postId || parseInt(id || "0")
  );

  return (
    <div
      className={`${styles.commentsList} ${
        inPostContainer ? styles.inPostContainer : ""
      }`}
    >
      {comments.map((comment: IComment) => {
        return (
          <div key={comment.id} className={styles.commentCard}>
            <h2 className={styles.commentTitle}>{comment.name}</h2>
            <p className={styles.commentEmail}>{comment.email}</p>
            <p className={styles.commentBody}>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default withLogger(Comments);
