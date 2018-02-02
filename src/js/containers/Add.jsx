import React from 'react';
import Form from '../components/Form';
import Dream from '../components/Dream';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Add = ({store}) => {

  const {
    dreams, chosenDreams
  } = store;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submit`);
  };

  return (
    <section className='card'>
      <div className='card-chosen'>
        <h1 className='card-title'>#toekomstmuziek</h1>
        <div className='dreams-chosen'>
          {chosenDreams.map(d =>
            // console.log(d)
            <Dream key={d} props={d} />
          )}
          <div className='dreams-you'>
            <img src='../assets/img/person.png' className='dreams-you-img'></img>
          </div>
          <p className='dreams-title'>Mijn<br />toekomst <br />dromen</p>
        </div>

      </div>

      <form className='dreams-options' onSubmit={handleSubmit}>
        <div className='dreams-options-section dreams-options-sex'>
          <p className='dreams-question'>Stap 1: wie ben jij?</p>
          <input className='checkbox' type='radio' id='male'
            name='contact' value='man'  />
          <label className='dream-label'>Man</label>

          <input className='checkbox' type='radio' id='female'
            name='contact' value='vrouw' />
          <label className='dream-label'>Vrouw</label>
        </div>
        <div className='dreams-options-section dreams-options-items'>
          <p className='dreams-question'>Stap 2: wat zijn de vijf dingen die je tegen jouw 35ste in jouw leven wil?</p>
          {dreams.map(d => <Form key={d} props={d} />)}
        </div>
        <input type='submit' className='submit-dreams' value='Naar de toekomst'></input>
      </form>
    </section>
  );
};


Add.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Add)
);
//
// export default Add;
