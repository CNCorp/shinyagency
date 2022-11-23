import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./card";
import defaultImg from "../../assets/DSC08941.jpg";

describe("Card", () => {
  it("should render a Card with correct job label and name title", () => {
    render(
      <Card
        label="Testeur"
        title="Charly"
        picture="https://i.picsum.photos/200/"
      />
    );

    const job = screen.getByText("Testeur");
    const name = screen.getByText("Charly");
    expect(job).toBeTruthy();
    expect(name).toBeTruthy();
  });

  it("should render a Card with default image when none passed", () => {
    render(<Card label="Testeur" title="Charly" />);

    const img = screen.getByRole("img");
    expect(img.src).toBe(`http://localhost/${defaultImg}`);
  });

  it("should render a Card with the correct passed image", () => {
    const testpic =
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg";

    render(<Card label="Testeur" title="Charly" picture={testpic} />);

    const img = screen.getByRole("img");
    expect(img.src).toBe(testpic);
  });

  it("should render a Card with a star when clicked", () => {
    const title = "Charly";
    render(<Card label="Testeur" title={title} />);

    const cardTitle = screen.getByText(title);
    expect(cardTitle).toBeTruthy();

    const card = screen.getByTestId("CardContainer");
    fireEvent.click(card);

    expect(cardTitle.textContent).toBe(`⭐ ${title} ⭐`);
  });
});
