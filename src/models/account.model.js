const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const ENUMS = require('./enum/index');

const accountSchema = mongoose.Schema(
  {
    accountType: {
      type: String,
      enum: Object.values(ENUMS.ACCOUNT_TYPE),
      default: ENUMS.ACCOUNT_TYPE.typeBronze,
    },
    balance: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    transactions: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Transaction',
      },
    ],
  },

  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
accountSchema.plugin(toJSON);
accountSchema.plugin(paginate);

/**
 * @typedef Account
 */
const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
