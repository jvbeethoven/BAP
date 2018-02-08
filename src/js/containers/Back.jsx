import React from 'react';
// import Form from '../components/Form';
// import Dream from '../components/Dream';
// import {Link} from 'react-router-dom';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Back = ({store}) => {

  const {
    chosenDreams, sex, email, message, randomMsgs
  } = store;

  const getMessage = () => {
    return randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
  };

  console.log(getMessage);

  console.log(`Gekozen dromen ${chosenDreams}`);

  console.log(`Gekozen geslacht ${sex}`);

  console.log(`Gekozen mail ${email}`);

  console.log(`Gekozen bericht ${message}`);

  return (
    <section className='card'>
      <div className='card-chosen'>
        <div className='card-content'>
          <div className='card-content-chosenDreams'></div>
          <div className='card-content-addedText'></div>
        </div>
        <div className='card-user-info'>
          <img className='stamp'></img>
          <p className='chosenMessage'>{message}</p>
        </div>
      </div>
    </section>
  );
};


Back.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Back)
);
