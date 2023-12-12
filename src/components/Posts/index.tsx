import { lazy } from "react";
import withLogger from "@hoc/withLogger";
import { usePostsWithFilter } from "@root/hooks/usePostsWithFilter";
import { IPost } from "@root/interfaces/IPost";
import PageWrapper from "@root/containers/PageWrapper";
import PostsPlaceholder from "@components/Posts/PostsPlaceholder";
import InputFilter from "../Shared/FieldInput";

import styles from "./Posts.module.css";
import { debounce } from "@root/utils/global";
import { SEARCH_NO_MATCH } from "@root/constants/global";

const PostDetails = lazy(() => import("../PostDetails"));

const Posts = () => {
  const { posts, handleFilter } = usePostsWithFilter();
  return (
    <PageWrapper
      title="Posts"
      fallback={<PostsPlaceholder />}
      renderBack
      buttonText="Go to home"
      route="/"
    >
      <hr className={styles.hr} />
      <InputFilter
        onChange={debounce(handleFilter, 500)}
        placeholder="Search by author ..."
      />
      <main className={styles.postList}>
        {posts.length ? (
          posts.map((post: IPost) => <PostDetails key={post.id} post={post} />)
        ) : (
          <div className={styles.noMatch}>{SEARCH_NO_MATCH}</div>
        )}
      </main>
    </PageWrapper>
  );
};

export default withLogger(Posts);
