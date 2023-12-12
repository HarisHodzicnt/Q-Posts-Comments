import { Suspense, lazy } from "react";

const Home = lazy(() => import("@components/Home"));
const PostDetails = lazy(() => import("@components/PostDetails"));
const NotFound = lazy(() => import("@components/Shared/NotFound"));
const PostPlaceholder = lazy(() => import("@components/PostPlaceholder"));
const Posts = lazy(() => import("@components/Posts"));

export const getRouteList = () => {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/post/:id",
      element: (
        <Suspense fallback={<PostPlaceholder />}>
          <PostDetails />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
};
