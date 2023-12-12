import { POSTS_BASE_URL } from "@endpoints/posts";
import { getFromCacheOrServer } from "@root/endpoints/dataFetching";

const fetchComments = <T>(postId: number) =>
  getFromCacheOrServer<T>(`${POSTS_BASE_URL}/${postId}/comments`);

export { fetchComments };
