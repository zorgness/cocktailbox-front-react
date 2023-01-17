import { render, screen } from "@testing-library/react";

import Popular from "../components/Popular";

test("should find the title in popular section", () => {
  render(<Popular />);
  const title = screen.getByTestId("popular");
  expect(title).toHaveTextContent("Popular");
});
