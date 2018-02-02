/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, string} from 'prop-types';

const Form = ({props, addDreams}) => {

  const handleChange = () => {
    const bool = document.getElementById(props).checked;
    addDreams(props, bool);
  };

  return (
    <div>
      <input type='checkbox' id={props} className='checkbox' onChange={handleChange}></input>
      <label>{props}</label>
    </div>
  );
};

Form.propTypes = {
  // dream: string.isRequired,
  addDreams: func.isRequired,
  props: string.isRequired
};

export default inject(
  ({store}) => {
    return {
      addDreams: store.addDreams
    };
  }
)(
  observer(Form)
);
// export default Form;
// export default inject(`store`)(
//   observer(Form)
// );
