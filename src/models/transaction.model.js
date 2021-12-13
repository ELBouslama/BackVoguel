const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const ENUMS = require('./enum/index');

const transactionSchema = mongoose.Schema(
  {
    description: {
      type: String,
    },
    value: {
      type: Number,
      required: true,
    },
    issuer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Account',
      required: true,
    },
    recipient: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Account',
    },
    nature: {
      type: String,
      required: true,
      enum: Object.values(ENUMS.TRANSACTION_TYPE),
    },
    balanceAfterTransaction: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
transactionSchema.plugin(toJSON);
transactionSchema.plugin(paginate);

/**
 * @typedef Transaction
 */
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
