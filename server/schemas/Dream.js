const Joi = require(`joi`);

const schema = {

  name: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  imageName: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  }

};

module.exports = {schema};
