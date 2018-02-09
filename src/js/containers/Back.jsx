import React from 'react';
// import Form from '../components/Form';
// import Dream from '../components/Dream';
import {Redirect} from 'react-router-dom';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Back = ({store}) => {

  const {
    chosenDreams, sex, email, years, message, information, setEmail, setMessage, setYears, add, finalizeForm, backComplete
  } = store;
  let $email, $message, $years, randomMessage;
  const randomMsg = chosenDreams[Math.floor(Math.random() * chosenDreams.length)];

  const containsChildren = item => {
    return item === `Kinderen`;
  };

  const test = chosenDreams.find(containsChildren);

  if (typeof test !== `undefined`) {
    console.log(`children`);
    const findMessage = information.find(item => {
      return item.tag === `kinderen`;
    });
    randomMessage = findMessage.message;
  } else {
    const testMessage = randomMsg.toString().toLowerCase();
    const findMessage = information.find(item => {
      return item.tag === testMessage;
    });
    randomMessage = findMessage.message;
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (email && message && years) {
      add(email, message, `test`, years, chosenDreams[0], chosenDreams[1], chosenDreams[2], chosenDreams[3], chosenDreams[4], sex);
      finalizeForm(true);
    } else {
      finalizeForm(false);
    }
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
            <input type='number' ref={$el => $years = $el} onChange={handleYears} />
            <p>jaar ben ik 35</p>
            <div className='card-content-chosenDreams'></div>
            <div className='card-content-addedText'>{randomMessage}</div>
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
        {backComplete ? <Redirect to={`/`} /> : ``}
    </section>
  );
};


Back.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Back)
);
