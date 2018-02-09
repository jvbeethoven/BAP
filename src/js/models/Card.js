export default class Card {

  email = ``
  message = ``
  informationId = ``
  years = ``
  dreamOne = ``
  dreamTwo = ``
  dreamThree = ``
  dreamFour = ``
  dreamFive = ``
  person = ``
  created = ``
  modified = ``
  _id = ``
  isActive = true


  constructor({
    email,
    message,
    informationId,
    years,
    dreamOne,
    dreamTwo,
    dreamThree,
    dreamFour,
    dreamFive,
    person,
    _id,
    created,
    modified,
    isActive
  }) {

    this.email = email;
    this.message = message;
    this.informationId = informationId;
    this.years = years;
    this.dreamOne = dreamOne;
    this.dreamTwo = dreamTwo;
    this.dreamThree = dreamThree;
    this.dreamFour = dreamFour;
    this.dreamFive = dreamFive;
    this.person = person;
    this._id = _id;
    this.created = created;
    this.isActive = isActive;
    this.modified = modified;
  }
}
