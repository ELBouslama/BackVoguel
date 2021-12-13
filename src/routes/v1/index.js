const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const accountRoute = require('./account.route');
const operationRoute = require('./operation.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/account', accountRoute);
router.use('/operation', operationRoute);
module.exports = router;
