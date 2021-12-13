const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');

const userdata = catchAsync(async (req, res) => {
  try {
    const { id } = req.user;
    const userData = await userService.getFullUserData(id);
    res.status(httpStatus.OK).send(userData);
  } catch (error) {
    res.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
      error,
    });
  }
});

module.exports = {
  userdata,
};
