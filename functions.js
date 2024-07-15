/**
 * Get Full Name
 * @name getFullName Concats first name and last namessss
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`.trim();
}

/**
 * Validate Length
 * @name validateLength validates Length of String
 * @param {string} argument 
 * @param {number} length 
 * @return {boolean} 
 */
function validateLength(str, length) {
    return str.length==length;
}


// eslint-disable-next-line import/prefer-default-export
export { getFullName,validateLength };