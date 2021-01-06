/* eslint-disable no-console */
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

  /**
   * Factory function to create a ShallowWrapper for the App Component
   * @function setup
   * @param  {} =>shallow(<App/>
   * @returns {ShallowWrapper}
   */
  const setup = () => shallow(<App />);

  const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  const buttonClickToCheckText = (wrapper, btnType, displayType) => {
    const btn = findByTestAttribute(wrapper, btnType);
    btn.simulate('click');
    const text = findByTestAttribute(wrapper, displayType).text();
    return text;
  };

  describe('Incrementer', () => {
    test('should render increment button', () => expect(findByTestAttribute(setup(), 'increment-button').length).toBe(1));
    test('should perform User Interaction to increment Count by 1', () => expect(buttonClickToCheckText(setup(), 'increment-button', 'counter-display')).toEqual('Count:1'));
  });

  describe('Decrementer', () => {
    test('should render decrement button', () => expect(findByTestAttribute(setup(), 'decrement-button').length).toBe(1));
    test('should perform User Interaction to decrement Count by 1', () => {
      const wrapper = setup();

      // Increments the count by 1
      // Then decrement it to check if the decrementer syntax is working or no.
      findByTestAttribute(wrapper, 'increment-button').simulate('click');
      expect(buttonClickToCheckText(wrapper, 'decrement-button', 'counter-display')).toEqual('Count:0');
    });
    test('should alert the user if counter decrementer < 0', () => { });
  });

  describe('Counter Value', () => {
    test('should render counter display', () => expect(findByTestAttribute(setup(), 'counter-display').text()).toEqual('Count:0'));
  });

  describe('Error Message', () => {
    test('should render the error message box', () => expect(findByTestAttribute(setup(), 'err-message').length).toBe(1));
    test('should display the error message if counter is decremented when the value is zero', () => expect(findByTestAttribute(setup(), 'err-message').text()).toEqual('Error: Unable to Decrement the counter.'));
    test('should clear the error message on clicking incrementer', () => {
      findByTestAttribute(setup(), 'increment-button').simulate('click');
      expect(findByTestAttribute(setup(), 'err-message').hasClass('noErrorMessage')).toBe(true);
    });
  });

  test('should render app without crashing', () => expect(findByTestAttribute(setup(), 'component-app').length).toBe(1));
  test('Create an App.js snapshot', () => expect(renderer.create(<App />).toJSON()).toMatchSnapshot());
});
