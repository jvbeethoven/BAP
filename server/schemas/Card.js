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
    validation: Joi.string().min(1)
  },

  years: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  dreamOne: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  dreamTwo: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  dreamThree: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  dreamFour: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  dreamFive: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  },

  person: {
    type: String,
    required: true,
    validation: Joi.string().min(1)
  }

};

module.exports = {schema};
