const httpStatus = require('http-status');
const pick = require('../utils/pick');
const { accountService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const createAccount = catchAsync(async (req, res) => {
  try {
    const { id } = req.user;
    const account = await accountService.createAccount({
      ...req.body,
      owner: id,
      balance: 0,
      transactions: [],
    });
    res.status(httpStatus.CREATED).send(account);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const getAccountById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const account = await accountService.getAccountById(id);
    res.status(httpStatus.OK).send(account);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const updateAccount = catchAsync(async (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const account = await accountService.updateAccountById(id, body);
    res.send(account);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const getAccounts = catchAsync(async (req, res) => {
  try {
    const { user } = req;
    const accounts = await accountService.getAccounts(user.id);
    res.status(httpStatus.OK).send(accounts);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const deleteAccountById = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const accountDeleted = await accountService.deleteAccountById(id);

    res.status(httpStatus.OK).send(accountDeleted);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const searchAccounts = catchAsync(async (req, res) => {
  try {
    const filter = pick(req.query, ['search']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);

    const result = await accountService.queryAccounts(filter, options);

    res.status(httpStatus.OK).send(result);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

module.exports = {
  createAccount,
  getAccountById,
  searchAccounts,
  deleteAccountById,
  updateAccount,
  getAccounts,
};
