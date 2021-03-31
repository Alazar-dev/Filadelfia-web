import '@testing-library/jest-dom';
import renderer from "react-test-renderer";

import App from '../App.js';



  it('renders a snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });