const httpStatus = require('http-status');
const { userService } = require('.');
const Account = require('../models/account.model');
const ApiError = require('../utils/ApiError');
const { errors } = require('../utils/errors.constant');

/**
 * Create an Account
 * @param {Object} accountBody
 * @returns {Promise<Account>}
 */
const createAccount = async (accountBody) => {
  const account = await Account.create(accountBody);
  const user = await userService.getUserById(account.owner);
  user.accounts.push(account.id);
  await user.save();
  return account;
};

const getAccountById = async (id) => {
  const account = await Account.findById(id);
  if (!account) {
    throw new ApiError(httpStatus.NOT_FOUND, errors.ACCOUNT_NOT_FOUND);
  }
  return account;
};

const updateAccountById = async (accountId, body) => {
  const account = await getAccountById(accountId);
  Object.assign(account, { ...body });
  await account.save();
  return account;
};

const getAccounts = async (userId) => {
  const accounts = await Account.find({ owner: userId });
  return accounts;
};

const deleteAccountById = async (id) => {
  const account = await getAccountById(id);
  await account.remove();
  const user = await userService.getUserById(account.owner);
  await userService.updateUserById(user.id, {
    // eslint-disable-next-line eqeqeq
    accounts: user.accounts.filter((element) => element != id),
  });

  // delete all the transaction for the deleted account
  return account;
};

const queryAccounts = async (filter, options, select, populations) => {
  const accounts = await Account.paginate(filter, options, select, populations);
  return accounts;
};

module.exports = {
  createAccount,
  getAccountById,
  updateAccountById,
  getAccounts,
  deleteAccountById,
  queryAccounts,
};
