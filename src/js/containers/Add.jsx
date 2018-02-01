import React from 'react';
import Form from '../components/Form';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Add = ({store}) => {

  const {
    cards, dreams, chosenDreams
  } = store;

  console.log(chosenDreams);
  const toggle = false;

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`test`);
    toggle !== toggle;
  };

  return (
    <section className='createCard'>
      <div className='cardViz'>
        <h1>#toekomstmuziek</h1>
        <p>{cards[0]}</p>
        <div>
          {
            chosenDreams.map(d => <span key={d}>{d}</span>)
          }
          {/* <div className='leftDreams'>
            <p>{cards[0]}</p>
            <p>{cards[1]}</p>
            <p>{cards[2]}</p>
          </div>
          <div className='person'>person</div>
          <div className='rightDreams'>
            <p>{cards[3]}</p>
            <p>{cards[5]}</p>
          </div> */}
        </div>

      </div>

      <form className='cardOptions' onSubmit={handleSubmit}>
        {
          dreams.map(d => <Form key={d} props={d} />)
        }
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
