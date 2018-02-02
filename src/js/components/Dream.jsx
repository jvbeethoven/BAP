/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {string, object} from 'prop-types';
let lastId = 0;

const Dream = ({props, chosenDreams}) => {

  const imgSrc = `../assets/img/${props}.png`;

  // for (let i = 0;i < 25;i ++) {
  lastId ++;
  // }
  console.log(chosenDreams);

  return (
    <div className={`dream-item dream-item-${  lastId}`}>
      <img
        className={`dream-img dream-img-${  lastId}`}
        alt={props}
        src={imgSrc}
      ></img>
      <p className='dream-label'>{props}</p>
    </div>
  );
};

Dream.propTypes = {
  props: string.isRequired,
  chosenDreams: object.isRequired
};

export default inject(
  ({store}) => {
    return {
      chosenDreams: store.chosenDreams
    };
  }
)(
  observer(Dream)
);
