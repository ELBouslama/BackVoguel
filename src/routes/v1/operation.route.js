const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');

const { operationController } = require('../../controllers');
const operationValidation = require('../../validations/operation.validation');

const router = express.Router();

// deposit funds to my current account
router.post('/deposit', auth('user'), validate(operationValidation.depositFunds), operationController.deposit);
// withdraw money from my current account
router.post('/withdraw', auth('user'), validate(operationValidation.withdrawFunds), operationController.withdraw);
// transfert money from an account to another account
router.post('/transfer', auth('user'), validate(operationValidation.transferfunds), operationController.transfer);

module.exports = router;
