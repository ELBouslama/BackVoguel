const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createAccount = {
  body: Joi.object().keys({
    accountType: Joi.string().required().valid('BRONZE', 'SILVER', 'GOLD'),
  }),
};

const searchAccounts = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getAccount = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

const updateAccount = {
  params: Joi.object().keys({
    id: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      accountType: Joi.string().valid('BRONZE', 'SILVER', 'GOLD'),
    })
    .min(0),
};

const deleteAccount = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAccount,
  deleteAccount,
  updateAccount,
  getAccount,
  searchAccounts,
};
