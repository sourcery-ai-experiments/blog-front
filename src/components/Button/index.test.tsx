import { render } from "@testing-library/react";
import Button from "@/components/Button";
import "@testing-library/jest-dom";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending: false }),
}));

describe("Button", () => {
  it("render button", () => {
    const { container } = render(<Button>hello</Button>);

    expect(container).toMatchSnapshot();
  });

  it("onclick", () => {
    const onClickHandler = jest.fn();

    const { container } = render(
      <Button onClick={onClickHandler}>hello</Button>,
    );
    container.querySelector("button")?.click();

    expect(onClickHandler).toHaveBeenCalled();
  });
});
