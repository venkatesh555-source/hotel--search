import { render, screen } from "@testing-library/react";
import Holiday from "./holiday";

describe("Holiday Component", () => {
  test("renders without crashing", () => {
    render(<Holiday />);
  });

  test("renders  Holiday component", () => {
    render(<Holiday />);
    const holiday = screen.getByText("Next");
    expect(holiday).toBeInTheDocument();
  });
});
