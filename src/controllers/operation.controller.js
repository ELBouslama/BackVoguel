const httpStatus = require('http-status');

const { operationService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const deposit = catchAsync(async (req, res) => {
  try {
    const issuer = req.user.accounts[0];
    const transactionDetails = { ...req.body, issuer };
    const transaction = await operationService.depositFunds(transactionDetails);
    res.status(httpStatus.OK).send(transaction);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const withdraw = catchAsync(async (req, res) => {
  try {
    const issuer = req.user.accounts[0];
    const transactionDetails = { ...req.body, issuer };
    const transaction = await operationService.withdrawFunds(transactionDetails);
    res.status(httpStatus.OK).send(transaction);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

const transfer = catchAsync(async (req, res) => {
  try {
    const issuer = req.user.accounts[0];
    const transactionDetails = { ...req.body, issuer };
    const transaction = await operationService.transferFunds(transactionDetails);
    res.status(httpStatus.OK).send(transaction);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

module.exports = {
  deposit,
  withdraw,
  transfer,
};
