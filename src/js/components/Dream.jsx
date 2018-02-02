/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {string} from 'prop-types';

const Dream = ({props}) => {
  const imgSrc = `../assets/img/${props}.png`;
  return (
    <div className='dream-item'>
      <img
        className={`dream-img ${  props}`}
        alt={props}
        src={imgSrc}
      ></img>
      <p>{props}</p>
    </div>
  );
};

Dream.propTypes = {
  props: string.isRequired
};

export default inject(
  ({store}) => {
    return {
      addDreams: store.addDreams
    };
  }
)(
  observer(Dream)
);
