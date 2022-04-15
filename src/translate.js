const getLetterDetails = require('./getLetterDetails');

/**
 * Translates the input string into an object containing the effort described by input.
 *
 * @param {string} input The shorthand codified notation of the effort.
 * @returns {object} The effort data.
 */
const translate = (input) => {
  const letters = input.split('');

  return letters.reduce((accumulator, letter) => {
    const { status, effort } = getLetterDetails(letter);
    accumulator[status] = (accumulator[status] || 0) + effort;

    return accumulator;
  }, {});
};

module.exports = translate;
