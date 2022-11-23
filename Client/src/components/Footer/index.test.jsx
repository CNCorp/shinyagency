import Footer from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../utils/context";

describe("Footer", () => {
  it("Should render without crashing", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toBeTruthy();
  });
  it("should change icon when togglebutton is pressed", async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );
    const toggleButton = screen.getByRole("button");

    expect(toggleButton.textContent).toBe("☀️");
    fireEvent.click(toggleButton);
    expect(toggleButton.textContent).toBe("🌙");
  });
});
