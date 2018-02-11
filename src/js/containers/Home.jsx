import React from 'react';
import {
  inject,
  observer,
  PropTypes
} from 'mobx-react';

const Home = ({store}) => {

  const {
    cards
  } = store;

  if (store.cards) {
    return (
      <ul className='home-cards-container'>
    {
      cards.map(c => (
        <li key={c._id} > {c.message}</li>
      ))
    }
  </ul>
    );
  } else {
    return (
      <p>Overzicht van alle kaartjes</p>
    );
  }

};


Home.propTypes = {
  store: PropTypes.observableObject.isRequired
};

export default inject(`store`)(
  observer(Home)
);
