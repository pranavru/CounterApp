import React from 'react';
import PropTypes from 'prop-types';

const mutateValueBy = 1;

const ButtonComponent = ({
  type, classValue, clickedMethod, name, dataTest,
}) => (
  <>
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      className={classValue}
      onClick={() => clickedMethod(mutateValueBy)}
      data-test={dataTest}
    >
      {name}
    </button>
  </>
);
ButtonComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  classValue: PropTypes.string,
  clickedMethod: PropTypes.func,
  dataTest: PropTypes.string,
};
ButtonComponent.defaultProps = {
  name: 'Counter Button',
  type: 'button',
  classValue: 'no-class-assigned',
  // eslint-disable-next-line no-console
  clickedMethod: () => console.log('No Method found'),
  dataTest: '',
};
export default ButtonComponent;
