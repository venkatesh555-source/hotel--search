import { render, screen } from "@testing-library/react";
import App from "./App";
import Holiday from "./components/holiday";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});

describe("Searchbar", () => {
  test("renders  SearchBar component", () => {
    render(<App />);
    const searchBar = screen.getByText("Filters");
    expect(searchBar).toBeInTheDocument();
  });
});

//show results not found when no data is fetched
