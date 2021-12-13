const httpStatus = require('http-status');
const { accountService } = require('.');
const ENUMS = require('../models/enum/index');
const Transaction = require('../models/transaction.model');
const ApiError = require('../utils/ApiError');
const { errors } = require('../utils/errors.constant');
const getMaximum = require('../utils/getMaximum');

const createTransaction = async (transactionBody) => {
  const transaction = await Transaction.create(transactionBody);
  const account = await accountService.getAccountById(transactionBody.issuer);
  account.transactions.push(transaction.id);
  await account.save();
  return transaction;
};

/**
 * Deposit funds
 * @param {Object} transactionBody
 * @returns {Promise<Account>}
 */
const depositFunds = async (transactionBody) => {
  const account = await accountService.getAccountById(transactionBody.issuer);
  const transaction = await createTransaction({
    ...transactionBody,
    nature: ENUMS.TRANSACTION_TYPE.deposit,
    balanceAfterTransaction: account.balance + transactionBody.value,
  });
  account.balance += transactionBody.value;
  await account.save();
  return transaction;
};

const withdrawFunds = async (transactionBody) => {
  const account = await accountService.getAccountById(transactionBody.issuer);
  const maximumAllowed = await getMaximum(account.accountType);

  if (transactionBody.value > maximumAllowed) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, errors.WITHDRAW_NOT_ALLOWED);
  }
  if (transactionBody.value > account.balance) {
    throw new ApiError(httpStatus.NOT_ACCEPTABLE, errors.OUT_OF_CASH);
  }
  const transaction = await createTransaction({
    ...transactionBody,
    nature: ENUMS.TRANSACTION_TYPE.widthdraw,
    balanceAfterTransaction: account.balance - transactionBody.value,
  });
  account.balance -= transactionBody.value;
  await account.save();
  return transaction;
};

const transferFunds = async (transactionBody) => {
  const accountIssuer = await accountService.getAccountById(transactionBody.issuer);
  const accountRecipient = await accountService.getAccountById(transactionBody.recipient);

  const maximumAllowed = await getMaximum(accountIssuer.accountType);
  if (transactionBody.value > maximumAllowed) {
    throw new ApiError(httpStatus.NOT_FOUND, errors.WITHDRAW_NOT_ALLOWED);
  }
  if (transactionBody.value > accountIssuer.balance) {
    throw new ApiError(httpStatus.NOT_FOUND, errors.OUT_OF_CASH);
  }
  const transactionIssuer = await createTransaction({
    ...transactionBody,
    nature: ENUMS.TRANSACTION_TYPE.transfer,
    balanceAfterTransaction: accountIssuer.balance - transactionBody.value,
  });
  accountIssuer.balance -= transactionBody.value;
  await accountIssuer.save();

  const transactionRecipient = await createTransaction({
    ...transactionBody,
    nature: ENUMS.TRANSACTION_TYPE.transfer,
    balanceAfterTransaction: accountRecipient.balance + transactionBody.value,
  });
  accountRecipient.balance += transactionBody.value;
  await accountRecipient.save();

  return { transactionSender: transactionIssuer, transactionReceiver: transactionRecipient };
};

module.exports = {
  depositFunds,
  transferFunds,
  withdrawFunds,
};
