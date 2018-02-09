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
    chosenDreams, sex, email, years, message, information, setEmail, setMessage, setYears, add
  } = store;

  let $email, $message, $years;
  const randomMsg = information[Math.floor(Math.random() * information.length)];

  const handleSubmit = e => {
    e.preventDefault();
    add(email, message, randomMsg.message, years, chosenDreams[0], chosenDreams[1], chosenDreams[2], chosenDreams[3], chosenDreams[4], sex);
    console.log(`added`);
  };

  const handleEmail = () => {
    setEmail($email.value);
  };

  const handleMessage = () => {
    setMessage($message.value);
  };

  const handleYears = () => {
    setYears($years.value);
  };

  return (
    <section className='card'>
        <form className='card-chosen' onSubmit={handleSubmit}>
          <div className='card-content'>
            <p>Binnen</p>
            <input type='text' ref={$el => $years = $el} onChange={handleYears} />
            <p>jaar ben ik 35</p>
            <div className='card-content-chosenDreams'></div>
            <div className='card-content-addedText'></div>
          </div>
          <div className='card-user-info'>
            <img className='stamp'></img>
            <label className='dreams-email-label'>E-mailadres</label>
            <input className='dreams-email-input' type='email' ref={$el => $email = $el} onChange={handleEmail} />
            <label className='dreams-message-label'>Mijn toekomstboodschap</label>
            <input className='dreams-message-input' type='text' ref={$el => $message = $el} onChange={handleMessage} />
            <input className='submit-dreams-form' type='submit' />
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
