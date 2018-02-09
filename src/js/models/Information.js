export default class Information {

  message = ``
  created = ``
  modified = ``
  _id = ``
  isActive = true


  constructor({
    message,
    _id,
    created,
    modified,
    isActive
  }) {

    this.message = message;
    this._id = _id;
    this.created = created;
    this.isActive = isActive;
    this.modified = modified;
  }
}
