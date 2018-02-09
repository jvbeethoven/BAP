const Joi = require(`joi`);

const schema = {

  message: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  tag: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  }

};

module.exports = {schema};
