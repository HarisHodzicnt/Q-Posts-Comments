import withLogger from "@hoc/withLogger";
import { useParams } from "react-router-dom";
import { IPostPlaceholderProps } from "@root/interfaces/IComponentsInterfaces";
import { getCardClassNames } from "@utils/post";

import styles from "./PostPlaceholder.module.css";
import PageWrapper from "@root/containers/PageWrapper";

const PostPlaceholder = ({ post }: IPostPlaceholderProps) => {
  const { id } = useParams();
  const postId = post?.id || parseInt(id ?? "0");
  const cardClassNames = getCardClassNames(postId, styles, !!post);
  return (
    <PageWrapper
      title="Post details page"
      renderHeader={!!id}
      renderBack={true}
      route="/posts"
      buttonText="Go to posts"
    >
      <div className={cardClassNames}>
        <h2 className={styles.postTitle} />
        <p className={styles.postBody} />
        <div className={styles.postAuthor} />
      </div>
    </PageWrapper>
  );
};

export default withLogger(PostPlaceholder);
