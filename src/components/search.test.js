import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  test("should render without crashing", () => {
    render(<SearchBar />);
  });
  test("renders  SearchBar component", () => {
    render(<SearchBar />);
    const searchBar = screen.getByText("Filters");
    expect(searchBar).toBeInTheDocument();
  });
});
