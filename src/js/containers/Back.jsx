import React from 'react';
// import Form from '../components/Form';
// import Dream from '../components/Dream';
import {Link} from 'react-router-dom';
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

  const handleSubmit = e => {
    console.log(`submit`);
    e.preventDefault();
  };

  return (
    <section className='card'>
      <div className='card-chosen'>

      </div>
      <form className='dreams-options' onSubmit={handleSubmit}>
        <div className='dreams-options-section dreams-options-sex'>
          <p className='dreams-question'>Wat is jouw emailadres?</p>
          <input type='text' onSubmit={handleSubmit}></input>
        </div>
        <div className='dreams-options-section dreams-options-items'>
          <p className='dreams-question'>WELKE BOODSCHAP WIL JE DELEN?</p>
          <input type='text' onSubmit={handleSubmit}></input>

        </div>
        <div className='dreams-buttons'>
          <Link to={`/Add`} className='dreams-submit'>Back</Link>
          {/* <Link to={`/Back`} className='dreams-submit'> */}
          <input type='submit' className='submit-dreams' value='Verzenden'></input>
          {/* </Link> */}
        </div>
      </form>
    </section>
  );
};


Back.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Back)
);
