/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import {inject, observer} from 'mobx-react';
import {object} from 'prop-types';

const Card = ({props}) => {
  console.log(props);
  if (props) {
    return (
      <div className='test'>
        {/* <img className={props.dreamOne} />
        <img className={props.dreamTwo} />
        <img className={props.dreamThree} />
        <img className={props.dreamFour} />
        <img className={props.dreamFive} /> */}
      </div>
    );
  }
};

Card.propTypes = {
  props: object.isRequired,
  // dreamOne: string.isRequired,
  // dreamTwo: string.isRequired,
  // dreamThree: string.isRequired,
  // dreamFour: string.isRequired,
  // dreamFive: string.isRequired,
};

export default inject(
  ({store}) => {
    return {
      chosenDreams: store.chosenDreams
    };
  }
)(
  observer(Card)
);
