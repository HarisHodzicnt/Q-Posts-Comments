import { API_ENDPOINT } from "@constants/global";
import { getFromCacheOrServer } from "@root/endpoints/dataFetching";

const POSTS_BASE_URL = `${API_ENDPOINT}/posts`;

const fetchPost = <T>(id: number) =>
  getFromCacheOrServer<T>(`${POSTS_BASE_URL}/${id}`);

const fetchPosts = <T>() => getFromCacheOrServer<T>(POSTS_BASE_URL);

export { fetchPosts, fetchPost, POSTS_BASE_URL };
