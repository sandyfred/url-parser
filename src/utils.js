/**
 *
 * @param {string} string
 * @param {string} delimiter
 * @returns {string[]}
 */
const splitStringAtFirstDelimiter = (string, delimiter) => {
  const indexOfDelimiter = string.indexOf(delimiter);

  if (indexOfDelimiter === -1) {
    return [string];
  }

  const beforeDelimiter = string.substring(0, indexOfDelimiter);
  const afterDelimiter = string.substring(indexOfDelimiter + delimiter.length);

  return [beforeDelimiter, afterDelimiter];
};

module.exports = { splitStringAtFirstDelimiter };
