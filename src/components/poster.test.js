import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Poster from "./poster";

test("Poster component rendering", () => {
  render(<Poster />);
  screen.getByText(`Have you seen this person?`);
});

test("Poster component rendering", () => {
  render(<Poster username="HettieM" name="Hettie McConnell" />);
  screen.getByText(`Wanted: Hettie McConnell`);
});
