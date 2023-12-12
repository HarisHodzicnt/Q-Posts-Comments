import withLogger from "@hoc/withLogger";
import PostPlaceholder from "@components/PostPlaceholder";
import { dummyProps } from "@constants/defaultValues";

import styles from "./Posts.module.css";

const PostsPlaceholder = () => {
  const placeholders = new Array(15).fill(undefined);

  return (
    <div className={styles.postList}>
      {placeholders.map((_, index: number) => (
        <PostPlaceholder key={index} post={dummyProps} />
      ))}
    </div>
  );
};

export default withLogger(PostsPlaceholder);
