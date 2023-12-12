import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Posts from "@components/Posts";
import { IPostDetailsProps } from "@root/interfaces/IComponentsInterfaces";
import { DebounceFunctionT } from "@root/types/DebounceType";

jest.mock("@root/hooks/usePostsWithFilter", () => ({
  usePostsWithFilter: jest.fn(() => ({
    posts: [],
    handleFilter: jest.fn(),
  })),
}));

jest.mock("@constants/envValues", () => ({
  API_ENDPOINT: "",
}));

jest.mock("@components/PostDetails", () => {
  return {
    __esModule: true,
    default: ({ post }: IPostDetailsProps) => (
      <div data-testid={`post-${post?.id}`} />
    ),
  };
});

jest.mock("@root/utils/global", () => ({
  debounce: jest.fn((fn: DebounceFunctionT<typeof jest.fn>) => fn),
}));

describe("Posts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Posts component with post details when posts are available", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1", author: "Author 1" },
      { id: 2, title: "Post 2", author: "Author 2" },
    ];
    require("@root/hooks/usePostsWithFilter").usePostsWithFilter.mockReturnValue(
      {
        posts: mockPosts,
        handleFilter: jest.fn(),
      }
    );

    render(
      <MemoryRouter>
        <Posts />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByTestId(`post-${mockPosts.length}`)
      ).toBeInTheDocument();
    });
    mockPosts.forEach((post) => {
      expect(screen.getByTestId(`post-${post.id}`)).toBeInTheDocument();
    });
  });
});
