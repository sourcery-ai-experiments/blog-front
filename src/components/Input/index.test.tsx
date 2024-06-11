import { render } from "@testing-library/react";
import Input from "@/components/Input";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: () => ({ pending: false }),
}));

describe("Input", () => {
  it("snapshot test", () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });
});

describe("Input", () => {
  it("snapshot test", () => {
    const { container } = render(<Input name="test" label="Test" />);

    expect(container).toMatchSnapshot();
  });
});
