import { render, screen } from "@testing-library/react";

function Example() {
  return <div>Hello World</div>;
}

test("renders hello world", () => {
  render(<Example />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
