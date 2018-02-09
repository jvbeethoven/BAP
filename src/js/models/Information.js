export default class Information {

  message = ``
  tag = ``
  created = ``
  modified = ``
  _id = ``
  isActive = true


  constructor({
    message,
    tag,
    _id,
    created,
    modified,
    isActive
  }) {

    this.message = message;
    this.tag = tag;
    this._id = _id;
    this.created = created;
    this.isActive = isActive;
    this.modified = modified;
  }
}
