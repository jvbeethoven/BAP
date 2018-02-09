export default class Dream {

  name = ``
  imageName = ``
  created = ``
  modified = ``
  _id = ``
  isActive = true


  constructor({
    name,
    imageName,
    _id,
    created,
    modified,
    isActive
  }) {

    this.name = name;
    this.imageName = imageName;
    this._id = _id;
    this.created = created;
    this.isActive = isActive;
    this.modified = modified;
  }
}
