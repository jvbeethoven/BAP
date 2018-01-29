const Joi = require(`joi`);

const schema = {

  email: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  message: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  informationId: {
    type: String,
    required: true,
    validation: Joi.string()
  },

  dreamsId: {
    type: Array,
    required: true,
    validation: Joi.array()
  },

  personId: {
    type: String,
    required: true,
    validation: Joi.string()
  }

};

module.exports = {schema};
