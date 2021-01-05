/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

// Note: running cleanup afterEach is done automatically for you in
// @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
configure({ adapter: new Adapter() });
afterEach(cleanup);
describe('Checkbox with Label', () => {
  const component = renderer.create(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // Renders the Checkbox Label component using react testing library
  it('CheckboxWithLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />,
    );

    expect(queryByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(getByLabelText(/off/i));

    expect(queryByLabelText(/on/i)).toBeTruthy();
  });

  // Render the Checkbox label component using react enzyme shallow library
  test('should render using enzyme Checkbox should initialize to Off', () => {
    const checkbox = shallow(<CheckboxWithLabel labelOff="Off" labelOn="On" />);
    expect(checkbox.text()).toBe('Off');
  });

  test('Checkbox should set to On onClick', () => {
    const checkbox = shallow(<CheckboxWithLabel labelOff="Off" labelOn="On" />);
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toBe('On');
  });
});
