const Joi = require('joi');
const { objectId } = require('./custom.validation');

const depositFunds = {
  body: Joi.object().keys({
    value: Joi.number().required(),
    description: Joi.string(),
  }),
};
const withdrawFunds = {
  body: Joi.object().keys({
    value: Joi.number().required(),
    description: Joi.string(),
  }),
};
const transferfunds = {
  body: Joi.object().keys({
    value: Joi.number().required(),
    description: Joi.string(),
    recipient: Joi.required().custom(objectId),
  }),
};

module.exports = {
  depositFunds,
  withdrawFunds,
  transferfunds,
};
