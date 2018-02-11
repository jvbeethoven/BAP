/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {func, string, object} from 'prop-types';

const Form = ({props, addChosenDreams, chosenDreams}) => {

  const isChecked = chosenDreams.includes(props);

  const handleChange = () => {
    const checkgroup = document.querySelectorAll(`.checkbox`);
    const errorMsg = document.querySelector(`.dreams-error`);
    const item = document.getElementById(props);
    const limit = 5;

    addChosenDreams(props, item.checked);
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
      <label className='dreams-label'>{props}</label>
    </div>
  );
};

Form.propTypes = {
  addChosenDreams: func.isRequired,
  props: string.isRequired,
  chosenDreams: object.isRequired
};

export default inject(
  ({store}) => {
    return {
      addChosenDreams: store.addChosenDreams,
      chosenDreams: store.chosenDreams
    };
  }
)(
  observer(Form)
);
