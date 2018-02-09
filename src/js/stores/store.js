import {observable, action} from 'mobx';
import cardsAPI from '../lib/api/cards';
import dreamsAPI from '../lib/api/dreams';
import informationAPI from '../lib/api/information';
import Card from '../models/Card';
import Dream from '../models/Dream';
import Information from '../models/Information';

class Store {

  @observable
  name = `test-bap`

  @observable
  sex = ``

  @observable
  email = ``

  @observable
  message = ``

  @observable
  years = ``

  @observable
  maxSelected = false;

  @observable
  formComplete = false;

  @observable
  cards = [];

  @observable
  dreams = [];

  @observable
  information = [];

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

    dreamsAPI.select()
    .then(({dreams}) => {
      this._addDreams(...dreams);
    });

    informationAPI.select()
    .then(({information}) => {
      this._addInformation(...information);
    });
  }

  add = (email, message, randomMsg, years, dreamOne, dreamTwo, dreamThree, dreamFour, dreamFive, sex) => {
    console.log(email, message, randomMsg, years, dreamOne, dreamTwo, dreamThree, dreamFour, dreamFive, sex);
    cardsAPI.create(email, message, randomMsg, years, dreamOne, dreamTwo, dreamThree, dreamFour, dreamFive, sex)
      .then(this._add);
  }

  @action
  _add = (...cards) => {

    cards.forEach(c => {

      this.cards.push(new Card(c)
        );

    });

  }

  @action
  _addDreams = (...dreams) => {

    dreams.forEach(d => {

      this.dreams.push(new Dream(d)
        );

    });

  }

  @action
  addChosenDreams = (dream, bool) => {
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

    this.checkMaxSelected();
  }

  @action
  _addInformation = (...information) => {

    information.forEach(i => {

      this.information.push(new Information(i)
        );

    });

  }

  @action
  checkMaxSelected = () => {
    if (this.chosenDreams.length >= 5) {
      this.maxSelected = true;
    } else if (this.chosenDreams.length < 5) {
      this.maxSelected = false;
    }
  }

  @action
  changeSex = string => {
    this.sex = string;
  }

  @action
  completeForm = bool => {
    this.formComplete = bool;
  }

  @action
  setEmail = email => {
    this.email = email;
  }

  @action
  setMessage = message => {
    this.message = message;
  }

  @action
  setYears = years => {
    this.years = years;
  }

}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;
