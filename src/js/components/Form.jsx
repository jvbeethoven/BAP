/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, string, bool} from 'prop-types';

const Form = ({props, addDreams, maxSelected}) => {

  if (maxSelected) {
    console.log(`max selected`);
  }

  const handleChange = () => {
    const bool = document.getElementById(props).checked;
    addDreams(props, bool);
  };

  return (
    <div>
      <input
        type='checkbox'
        id={props}
        className='checkbox'
        onChange={handleChange}>
      </input>
      <label className='dream-label'>{props}</label>
    </div>
  );
};

Form.propTypes = {
  addDreams: func.isRequired,
  maxSelected: bool.isRequired,
  props: string.isRequired
};

export default inject(
  ({store}) => {
    return {
      addDreams: store.addDreams,
      maxSelected: store.maxSelected
    };
  }
)(
  observer(Form)
);
// export default Form;
// export default inject(`store`)(
//   observer(Form)
// );
