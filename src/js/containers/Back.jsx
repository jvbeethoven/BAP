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
  let $email, $message, $years, $error, randomMessage;
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
      add(email, message, randomMessage, years, chosenDreams[0], chosenDreams[1], chosenDreams[2], chosenDreams[3], chosenDreams[4], sex);
      finalizeForm(true);
    } else {
      $error.innerHTML = `Oeps, jouw toekomstige ik zal hier niet genoeg mee hebben. Vul het aantal jaren, jouw email adres en boodschap in.`;
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
        <form className='card-back' onSubmit={handleSubmit}>
          <section className='card-back-container'>
            <h1 className='card-back-title'>Beste toekomstige ik,</h1>
              <div className='card-content-years'>
                <p className='card-content-years-p'>Binnen</p>
                <input className='card-content-years-input input' type='number' ref={$el => $years = $el} onChange={handleYears} />
                <p className='card-content-years-p'>jaar ben ik 35 en zou ik graag volgende dingen waargemaakt hebben:</p>
              </div>
              <div className='card-content-dreams'>
                {chosenDreams.map(d => <p className='card-content-dream' key={d}>{d}</p>)}
              </div>
              <p className='card-content-information'>{randomMessage}</p>
              <div className='card-content-message card-content-input-wrap'>
                <label className='card-content-message-label card-content-label'>Wat zijn jouw volgende stappen om jouw dromen werkelijkheid te maken?</label>
                <textarea className='card-content-message-input card-content-input input' type='text' ref={$el => $message = $el} onChange={handleMessage} rows='4' cols='50'>
                </textarea>
              </div>
              <div className='card-content-email card-content-input-wrap'>
                <label className='card-content-email-label card-content-label'>E-mailadres (we houden je toekomstige-ik hiermee op de hoogte!)</label>
                <input className='card-content-email-input card-content-input input' type='email' ref={$el => $email = $el} onChange={handleEmail} />
              </div>
              <h1 className='card-back-title'>Groetjes, je vroegere ik.</h1>
          </section>
          <input className='submit-dreams-form' type='submit' />
          {backComplete ? <Redirect to={`/`} /> : ``}
          <p ref={$el => $error = $el}></p>
        </form>
  );
};


Back.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Back)
);
