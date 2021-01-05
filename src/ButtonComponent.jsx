import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  type, classValue, clickedMethod, name,
}) => (
  <>
    {/* eslint-disable-next-line react/button-has-type */}
    <button type={type} className={classValue} onClick={clickedMethod}>
      {name}
    </button>
  </>
);
ButtonComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classValue: PropTypes.string,
  clickedMethod: PropTypes.func,
};
ButtonComponent.defaultProps = {
  name: 'Counter Button',
  type: 'button',
  classValue: '',
  // eslint-disable-next-line no-console
  clickedMethod: () => console.log('No Method found'),
};
export default ButtonComponent;
