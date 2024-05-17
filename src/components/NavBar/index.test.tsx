import { render } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  it("render test", () => {
    const { container } = render(<NavBar></NavBar>);

    expect(container).toMatchSnapshot();
  });
});
