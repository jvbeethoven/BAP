import {observable, action} from 'mobx';
import cardsAPI from '../lib/api/cards';
import Card from '../models/Card';

class Store {

  @observable
  name = `toekomstmuziek`

  // @observable
  // dream = `dream`

  @observable
  cards = [`1`, `2`, `3`, `4`, `5`];

  @observable
  dreams = [`kids`, `love`, `health`, `car`, `house`, `job`, `travel`]

  @observable
  chosenDreams = []

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

  @action
    addDreams = (dream, bool) => {
      if (bool) {
        if (this.chosenDreams.length < 5) {
          this.chosenDreams.push(dream);
        }
      } else if (!bool) {
        if (this.chosenDreams.length >= 0) {
          const indexOfEl = this.chosenDreams.indexOf(dream);
          if (indexOfEl !== - 1) {
            this.chosenDreams.splice(indexOfEl, 1);
          }
        }
      }
      // git;
    }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
