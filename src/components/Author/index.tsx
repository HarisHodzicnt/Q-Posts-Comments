import withLogger from "@hoc/withLogger";
import { IUser } from "@root/interfaces/IUser";
import { IAuthorProps } from "@root/interfaces/IComponentsInterfaces";
import { fetchUser } from "@endpoints/users";

import styles from "./Author.module.css";
import useDynamicFetching from "@root/hooks/useDynamicFetching";

const Author = ({ post }: IAuthorProps) => {
  const author = useDynamicFetching<IUser, number>(
    fetchUser<IUser>,
    post.userId
  );

  //"https://jsonplaceholder.typicode.com" doesn't support query params for /posts endpoint that why I am mapping it here
  post.author = author;

  return <div className={styles.postAuthor}>Author: {author?.name}</div>;
};

export default withLogger(Author);
