const config = require('./config');

/**
 * Gets the details for one effort item from configuration file.
 *
 * @param {string} value The effort value.
 * @returns {object|null} The details for the effort.
 */
const getLetterDetails = (value) => config[value];

module.exports = getLetterDetails;
