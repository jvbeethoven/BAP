/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {string} from 'prop-types';

import {inject, observer} from 'mobx-react';

const InputItem = ({d}) => {

  return (
    <input type='checkbox' className='suggestion-comment'>
      {d}
    </input>
  );

};

InputItem.propTypes = {
  d: string.isRequired
};

export default inject(`store`)(
  observer(InputItem)
);
