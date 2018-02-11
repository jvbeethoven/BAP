import React from 'react';
import Form from '../components/Form';
import Dream from '../components/Dream';
import {Redirect} from 'react-router-dom';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Add = ({store}) => {

  const {
    dreams, chosenDreams, changeSex, sex, formComplete, completeForm
  } = store;

  let $error;

  const handleSubmit = e => {
    e.preventDefault();
    if (chosenDreams.length === 5 && sex) {
      console.log(`submitted`);
      completeForm(true);
    } else {
      $error.innerHTML = `Vergeet jouw geslacht en vijf toekomstdromen niet in te vullen!`;
      console.log(`oeps`);
      completeForm(false);
    }
  };

  const handleChangeSex = string => {
    changeSex(string);
  };

  return (
    <form className='card' onSubmit={handleSubmit}>
      <section className='card-left'>
        <div className='card-chosen'>
          <h1 className='card-title'>#toekomst <br /> muziek</h1>
          <div className='dreams-chosen'>
            {chosenDreams.map(d =>
              <Dream key={d} props={d} />
            )}
            <div className='dreams-you'>
              <img src={sex ? `../assets/img/${sex}-person.png` : ``} className='dreams-you-img'></img>
              <div className='dreams-you-options dreams-you-sex'>
                <div className='dreams-you-options-wrapper'>
                  <input onChange={() => handleChangeSex(`female`)} className='female input sex-input' type='radio' name='sex' value='female' defaultChecked={sex === `female` ? true : false} />
                  <label className='female-label sex-label' htmlFor='female'></label>
                </div>
                <div className='dreams-options-wrapper'>
                  <input onChange={() => handleChangeSex(`male`)} className='male input sex-input' type='radio' name='sex' value='male' defaultChecked={sex === `male` ? true : false} />
                  <label className='male-label sex-label' htmlFor='male'></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <input type='submit' className='submit-dreams' value='Toon mijn toekomst &rarr;'></input>
        {formComplete ? <Redirect to={`/Back`} /> : ``}
      </section>

      <section className='dreams-options'>
        <div className='dreams-options-section dreams-options-items'>
          <p className='dreams-question'>Als ik 35 ben, wil ik deze vijf dingen waargemaakt hebben.</p>
          <p className='dreams-error'></p>
          <div className='dreams-checkbox-options'>
            {dreams.map(d => <Form key={d.name} props={d.name} />)}
          </div>
        </div>
          <p className='error-message' ref={$el => $error = $el}></p>
      </section>
    </form>
  );
};


Add.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Add)
);
