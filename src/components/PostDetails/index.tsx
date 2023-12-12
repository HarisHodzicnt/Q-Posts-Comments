import { Suspense, lazy } from "react";
import { useNavigate, useParams } from "react-router-dom";
import withLogger from "@hoc/withLogger";
import { getCardClassNames, modifyPostTitleBody } from "@utils/post";
import { fetchPost } from "@endpoints/posts";

import PageWrapper from "@containers/PageWrapper";
import CommentsToggler from "@components/CommentsToggler";

import useDynamicFetching from "@hooks/useDynamicFetching";
import { IPost } from "@interfaces/IPost";
import { IPostDetailsProps } from "@interfaces/IComponentsInterfaces";
import styles from "./PostDetails.module.css";

const Author = lazy(() => import("@components/Author"));

const PostDetails = ({ post }: IPostDetailsProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchedPostId = post?.id ?? parseInt(id || "0");
  const fetchedPost = useDynamicFetching<IPost, number>(
    fetchPost<IPost>,
    fetchedPostId,
    post
  );
  const cardClassNames = getCardClassNames(fetchedPostId, styles, !!post);
  const goToPost = () => post && navigate(`/post/${fetchedPostId}`);
  const [postTitle, postBody] = modifyPostTitleBody(fetchedPost, !!post);
  return (
    <PageWrapper
      title="Post details page"
      renderHeader={!!id}
      renderBack={true}
      route="/posts"
      buttonText="Go to posts"
    >
      <div onClick={goToPost} className={cardClassNames}>
        <h2 className={styles.postTitle} title={fetchedPost.title}>
          {postTitle}
        </h2>
        <p className={styles.postBody} title={fetchedPost.body}>
          {postBody}
        </p>
        <CommentsToggler postId={fetchedPostId} inPostContainer={!!post} />
        {fetchedPost.userId && (
          <Suspense
            fallback={
              <div className={styles.skeletAuthor}>Author: Loading</div>
            }
          >
            <Author post={fetchedPost} />
          </Suspense>
        )}
      </div>
    </PageWrapper>
  );
};

export default withLogger(PostDetails);
