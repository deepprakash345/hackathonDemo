/**
 * Calculate Total Principal
 * @name getPrincipalAmount calculates total principal
 * @param {number} sipValue
 * @param {number} yearsOfInvestment
 * @return {number}
 */
function getPrincipalAmount(sipValue, yearsOfInvestment) {
    return sipValue*yearsOfInvestment*12;
}

/**
 * Calculate Total Investment Value
 * @name getTotalInvestmentValue calculates total investment value
 * @param {number} sipValue
 * @param {number} yearsOfInvestment
 * @param {number} interestRate
 * @return {number}
 */
function getTotalInvestmentValue(sipValue, yearsOfInvestment, interestRate) {
        let i=interestRate/1200;
        return sipValue*(Math.pow(1+i,yearsOfInvestment)-1)*((1+i)/i)
}


// eslint-disable-next-line import/prefer-default-export
export {getPrincipalAmount,getTotalInvestmentValue };