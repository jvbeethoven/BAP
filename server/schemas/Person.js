const Joi = require(`joi`);

const schema = {

  name: {
    type: Array,
    required: true,
    validation: Joi.array()
  },

  imageName: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {schema};
