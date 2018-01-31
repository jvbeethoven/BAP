import {observable, action} from 'mobx';
import cardsAPI from '../lib/api/cards';
import Card from '../models/Card';

class Store {

  @observable
  name = `toekomstmuziek`

  @observable
  cards = [`1`, `2`, `3`, `4`, `5`];

  @observable
  dreams = [`kids`, `love`, `health`, `car`, `house`, `job`, `travel`]

  maxDreams = 5;

  constructor() {
    this.init();
  }

  init = () => {
    cardsAPI.select()
      .then(({cards}) => {
        this._add(...cards);
      });
  }

  add = content => {
    cardsAPI.insert(content)
      .then(card => this._add(card));
  }

  @action
    _add = (...cards) => {

      cards.forEach(c => {

        this.cards.push(new Card(c)
        );

      });

    }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
