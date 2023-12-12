import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentsToggler from "@components/CommentsToggler";

jest.mock("@root/hooks/useToggle", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    show: false,
    toggleShow: jest.fn(),
  })),
}));

jest.mock("@components/Comments", () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Comments</div>),
}));

describe("CommentsToggler Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders CommentsToggler component with initial state", async () => {
    render(<CommentsToggler postId={1} inPostContainer={true} />);
    expect(screen.getByText("Show comments")).toBeInTheDocument();
    expect(screen.queryByText("Mocked Comments")).toBeNull();
  });

  test("toggles comments on button click", async () => {
    render(<CommentsToggler postId={1} inPostContainer={true} />);

    userEvent.click(screen.getByText("Show comments")).then(() => {
      expect(screen.getByText("Hide comments")).toBeInTheDocument();
      expect(screen.getByText("Mocked Comments")).toBeInTheDocument();
      userEvent.click(screen.getByText("Hide comments")).then(() => {
        expect(screen.getByText("Show comments")).toBeInTheDocument();
        expect(screen.queryByText("Mocked Comments")).toBeNull();
      });
    });
  });
});
