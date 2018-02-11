/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {string, object} from 'prop-types';

const Dream = ({props, chosenDreams}) => {

  const imgSrc = `../assets/img/dreams/${props}.png`;
  const id = chosenDreams.indexOf(props) + 1;

  return (
    <div className={`dream-item dream-item-${  id}`}>
      <img
        className={`dream-img dream-img-${  id}`}
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
