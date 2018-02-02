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
    cards, dreams, chosenDreams
  } = store;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submit`);
  };

  return (
    <section className='card'>
      <div className='card-chosen'>
        <h1 className='card-title'>#toekomstmuziek</h1>
        <p>{cards[0]}</p>
        <div className='dreams-chosen'>
          {chosenDreams.map(d => <Dream key={d} props={d} />)}
        </div>

      </div>

      <form className='dreams-options' onSubmit={handleSubmit}>
        {
          dreams.map(d => <Form key={d} props={d} />)
        }
        <input type='submit'></input>
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
