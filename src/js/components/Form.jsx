/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, string, object} from 'prop-types';

const Form = ({props, addDreams, chosenDreams}) => {

  const isChecked = chosenDreams.includes(props);

  const handleChange = () => {
    const checkgroup = document.querySelectorAll(`.checkbox`);
    const errorMsg = document.querySelector(`.dreams-error`);
    const item = document.getElementById(props);
    const limit = 5;

    addDreams(props, item.checked);
    let checkedcount = 0;

    for (let i = 0;i < checkgroup.length;i ++) {
      checkedcount += (checkgroup[i].checked) ? 1 : 0;
      if (checkedcount > limit) {
        console.log(`You can only select a maximum of ${limit  } checkboxes`);
        item.checked = false;
        errorMsg.innerHTML = `Je kan maar maximum 5 dromen waarmaken :)`;
      } else {
        errorMsg.innerHTML = ``;
      }
    }
  };

  return (
    <div className='checkbox-wrapper'>
      <input
        type='checkbox'
        id={props}
        className={`checkbox check-${props}`}
        name='dreams'
        onChange={handleChange}
        defaultChecked={isChecked ? true : false}
      >
      </input>
      <label className='dream-label'>{props}</label>
    </div>
  );
};

Form.propTypes = {
  addDreams: func.isRequired,
  props: string.isRequired,
  chosenDreams: object.isRequired
};

export default inject(
  ({store}) => {
    return {
      addDreams: store.addDreams,
      chosenDreams: store.chosenDreams
    };
  }
)(
  observer(Form)
);
// export default Form;
// export default inject(`store`)(
//   observer(Form)
// );
