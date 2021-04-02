import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import Appbar from "../AppBar";
import TopBar from "../TopBar";

describe("Rendering Navbar", () => {
  it("renders a Appbar", () => {
    const tree = renderer.create(<Appbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a TopBar", () => {
    const tree = renderer.create(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
