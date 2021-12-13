/* eslint-disable no-unreachable */
/**
 * Create an object composed of the picked object properties
 
 * @param {string} accountType
 * @returns {Number}
 */
const getMaximum = (accountType) => {
  switch (accountType) {
    case 'BRONZE':
      return 500;
      break;
    case 'SILVER':
      return 1000;
      break;
    case 'GOLD':
      return 1500;
      break;
    default:
      return 500;
  }
};

module.exports = getMaximum;
