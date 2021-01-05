/* eslint-disable no-alert */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// Link.react.js
import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = (props) => {
  const [classVal, setClassVal] = React.useState(STATUS.NORMAL);
  const [countValue, setCounter] = React.useState(0);
  function onMouseEnter() {
    setClassVal(STATUS.HOVERED);
  }

  function onMouseLeave() {
    setClassVal(STATUS.NORMAL);
  }

  return (
    <>
      <a
        className={classVal}
        href={props.page || '#'}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {props.children}
      </a>
      <button type="button" onClick={() => setCounter(countValue + 1)}>
        Counter
        <span>
          {countValue}
        </span>
      </button>
    </>
  );
};

export default Link;
