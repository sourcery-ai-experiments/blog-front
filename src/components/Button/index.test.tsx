import { render } from "@testing-library/react";
import Button from "@/components/Button";
import "@testing-library/jest-dom";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormState: () => [{}, () => {}],
  useFormStatus: () => ({ pending: false }),
}));

describe("Button", () => {
  it("render button", () => {
    const { container } = render(<Button>hello</Button>);

    expect(container).toMatchSnapshot();
  });
});
