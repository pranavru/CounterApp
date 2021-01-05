/* eslint-disable react/jsx-filename-extension */
// src/App.test.js

import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });
describe('App Component', () => {
  // Using React Renderer
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders test with shallow & data-test without crashing', () => {
    const wrapper = shallow(<App />);
    const componentApp = wrapper.find("[data-test='component-app']");
    componentApp.debug();
    expect(componentApp.length).toBe(1);
  });

  test('should add', () => {
    expect(2 + 2).toBe(4);
  });

  test('should initialize the counter to zero', () => {
    const wrapper = shallow(<App />);
    const textField = wrapper.find('p').text();
    expect(textField).toBe('Count:0');
  });

  // Using Enzyme shallow
  test('should perform User Interaction to update Count by 1', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('ButtonComponent.increment');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count:1');
  });

  test('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('ButtonComponent.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count:-1');
  });

  test('create a snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// .mockImplementation((num) => (wrapper.setState({ count: wrapper.state('count') + (num * 10) })))
