import React from 'react';
import Form from '../components/Form';
import Dream from '../components/Dream';
import {Link} from 'react-router-dom';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Add = ({store}) => {

  const {
    dreams, chosenDreams, changeSex, sex
  } = store;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submit`);
  };

  const handleChangeSex = string => {
    changeSex(string);
  };

  return (
    <section className='card'>
      <div className='card-chosen'>
        <h1 className='card-title'>#toekomstmuziek</h1>
        <div className='dreams-chosen'>
          {chosenDreams.map(d =>
            <Dream key={d} props={d} />
          )}
          <div className='dreams-you'>
            <img src={sex ? `../assets/img/${sex}-person.png` : ``} className='dreams-you-img'></img>
            <div className='dreams-options-section dreams-options-sex'>
              <div className='dreams-options-wrapper'>
                <input onChange={() => handleChangeSex(`female`)} className='female input sex-input' type='radio' name='sex' value='female' defaultChecked={sex === `female` ? true : false} />
                <label className='female-label sex-label' htmlFor='female'></label>
              </div>
              <div className='dreams-options-wrapper'>
                <input onChange={() => handleChangeSex(`male`)} className='male input sex-input' type='radio' name='sex' value='male' defaultChecked={sex === `male` ? true : false} />
                <label className='male-label sex-label' htmlFor='male'></label>
              </div>
            </div>
          </div>
          <p className='dreams-title dreams-title-1'>Mijn</p>
          <p className='dreams-title dreams-title-2'>Toekomst</p>
          <p className='dreams-title dreams-title-3'>Dromen</p>
        </div>

      </div>

      <form className='dreams-options' onSubmit={handleSubmit}>
        <div className='dreams-options-section dreams-options-items'>
          <p className='dreams-question'>Stap 2: wat zijn de vijf dingen die je tegen jouw 35ste in jouw leven wil?</p>
          {dreams.map(d => <Form key={d} props={d} />)}
        </div>
        <Link to={`/Back`} className='dreams-submit'>
          <input type='submit' className='submit-dreams' value='Naar de toekomst &rarr;'></input>
        </Link>
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
