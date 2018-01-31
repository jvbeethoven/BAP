import React from 'react';
import InputItem from '../components/InputItem';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Add = ({store}) => {

  const {
    dreams, cards
  } = store;

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className='createCard'>
      <div className='cardViz'>
        <h1>#toekomstmuziek</h1>
        <div>
          <div className='leftDreams'>
            <p>{cards[0]}</p>
            <p>{cards[1]}</p>
            <p>{cards[2]}</p>
          </div>
          <div className='person'>person</div>
          <div className='rightDreams'>
            <p>{cards[3]}</p>
            <p>{cards[5]}</p>
          </div>
        </div>

      </div>
      <form className='cardOptions' onSubmit={handleSubmit}>
        {
          dreams.forEach(d => {
            console.log(d);
            <InputItem key={d} />;
          })
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
