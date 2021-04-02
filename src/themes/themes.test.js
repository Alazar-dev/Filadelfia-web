import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Theme from "../themes/Theme";

describe("Rendering Theme", () => {
  it("renders a Theme", () => {
    const tree = renderer.create(<Theme />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
