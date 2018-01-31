export default class Card {

  email = ``
  message = ``
  informationId = ``
  dreamsId = ``
  personId = ``
  created = ``
  modified = ``
  _id = ``
  isActive = true


  constructor({
    email,
    message,
    informationId,
    dreamsId,
    personId,
    _id,
    created,
    modified,
    isActive
  }) {

    this.email = email;
    this.message = message;
    this.informationId = informationId;
    this.dreamsId = dreamsId;
    this.personId = personId;
    this._id = _id;
    this.created = created;
    this.isActive = isActive;
    this.modified = modified;
  }
}
