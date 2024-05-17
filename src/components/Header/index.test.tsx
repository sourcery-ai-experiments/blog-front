import { render } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("header render test", () => {
    const { container } = render(<Header title={"test Title"}></Header>);

    expect(container).toMatchSnapshot();
  });

  it("header title test", () => {
    const title = "Test title";
    const { container } = render(<Header title={title}></Header>);

    const h1 = container.querySelector("h1");

    expect(h1?.innerHTML).toBe(title);
  });
});
