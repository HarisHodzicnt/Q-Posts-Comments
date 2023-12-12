import { ChangeEvent, useState } from "react";
import { fetchPosts } from "@root/endpoints/posts";
import useDynamicFetching from "./useDynamicFetching";
import { IPost } from "@root/interfaces/IPost";
import { stringToLowerCase } from "@root/utils/stringManipulation";

export const usePostsWithFilter = () => {
  const initialPosts = useDynamicFetching<IPost[]>(fetchPosts<IPost[]>);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    const matchingPosts = initialPosts.filter((post) =>
      stringToLowerCase(post.author?.name).includes(
        stringToLowerCase(e.target.value)
      )
    );
    setFilteredPosts(matchingPosts);
  };

  const posts = filteredPosts || initialPosts;
  return { posts, handleFilter };
};
