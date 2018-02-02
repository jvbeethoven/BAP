/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {string} from 'prop-types';

const Dream = ({props}) => {
  console.log(props);
  return (
    <div className='dream-item'>
      <img className={props}></img>
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
