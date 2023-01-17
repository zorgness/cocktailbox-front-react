import * as React from "react";
import { render, screen } from "@testing-library/react";
import Cocktail from "../components/cocktailComponents/cocktail/Cocktail";
import { drinks } from "../data/drinks";

test("cocktail component render with data", () => {
  render(<Cocktail data={drinks} />);

  const title = screen.getByText("Mojito");
  expect(title).toHaveTextContent(drinks[0].strDrink);
});
