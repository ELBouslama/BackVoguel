const express = require('express');
const auth = require('../../middlewares/auth');
const { userController } = require('../../controllers');

const router = express.Router();

router.get('/me', auth('user'), userController.userdata);

module.exports = router;
