/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
// Link.react.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

import Link from './Link';

Enzyme.configure({ adapter: new Adapter() });
const { act } = renderer;
describe('Link Component:', () => {
  test('Link changes the class when hovered', () => {
    const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    act(() => tree.props.onMouseEnter());
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    act(() => tree.props.onMouseLeave());
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  jest.mock('./Link', () => 'Link');

  test('should simulate click', () => {
    const component = shallow(<Link page="http://www.facebook.com" href="">Facebook</Link>);
    component.find('button').simulate('click');
    expect(component.text()).toBe('FacebookCounter1');
  });
});
