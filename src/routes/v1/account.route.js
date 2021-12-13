const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const accountValidation = require('../../validations/account.validation');
const { accountController } = require('../../controllers');

const router = express.Router();

// get All accounts for the current user
router.get('/', auth('user'), accountController.getAccounts);
// search for an account for the current user
router.get('/search', auth('user'), validate(accountValidation.searchAccounts), accountController.searchAccounts);
// get an account by id
router.get('/:id', auth('user'), validate(accountValidation.getAccount), accountController.getAccountById);

// create an account for the current user
router.post('/', auth('user'), validate(accountValidation.createAccount), accountController.createAccount);
// update an account of the current user
router.put('/:id', auth('user'), validate(accountValidation.updateAccount), accountController.updateAccount);

// delete an account
router.delete('/:id', auth('user'), validate(accountValidation.deleteAccount), accountController.deleteAccountById);

module.exports = router;
