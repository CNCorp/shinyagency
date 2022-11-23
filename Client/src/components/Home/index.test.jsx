import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "../../utils/context";
import Home, { getListCount } from "./";

describe("getListCount", () => {
  it("should return the list length with integers only array", () => {
    const list1 = [1, 2, 3, 4, 5];
    expect(getListCount(list1)).toBe(5);
  });
  it("should return the list length with string only array", () => {
    const list2 = ["iusz", "etoih885"];
    expect(getListCount(list2)).toBe(2);
  });
  it("should return the list length with mixed (string & integers) array", () => {
    const list3 = [1, "4554", 46487, "i54jhgf", "o854oo", "zroiugyz"];
    expect(getListCount(list3)).toBe(6);
  });
});

describe("Home Component", () => {
  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { level: 1, text: "Home 🏡" });
    expect(title).toBeTruthy();
  });
});
