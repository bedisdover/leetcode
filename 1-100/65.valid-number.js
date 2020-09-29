/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (14.42%)
 * Total Accepted:    139.7K
 * Total Submissions: 966.9K
 * Testcase Example:  '"0"'
 *
 * Validate if a given string can be interpreted as a decimal number.
 *
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 *
 * Note: It is intended for the problem statement to be ambiguous. You should
 * gather all requirements up front before implementing one. However, here is a
 * list of characters that can be in a valid decimal number:
 *
 *
 * Numbers 0-9
 * Exponent - "e"
 * Positive/negative sign - "+"/"-"
 * Decimal point - "."
 *
 *
 * Of course, the context of these characters also matters in the input.
 *
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button to reset your code definition.
 *
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  s = s.trim()
  if (0 === s.length) {
    return false
  }
  let i = 0
  if (s[i] === '+' || s[i] === '-') {
    s = s.slice(1)
  }
  while (s[i] >= '0' && s[i] <= '9') {
    i++
  }
  if (s[i] === '.') {
    i++
    while (s[i] >= '0' && s[i] <= '9') {
      i++
    }
    if (i === 1) {
      return false
    }
  }
  if (s[i] === 'e' && i !== 0) {
    i++
    if (s[i] === '+' || s[i] === '-') {
      i++
    }
    let temp = i
    while (s[i] >= '0' && s[i] <= '9') {
      i++
    }
    if (temp === i || temp === 1) {
      return false
    }
  }

  return i === s.length
}
console.assert(isNumber('0.') === true)
console.assert(isNumber('   .1') === true)
console.assert(isNumber(' 0.1 ') === true)
console.assert(isNumber('.') === false)
console.assert(isNumber('abc') === false)
console.assert(isNumber('1 a') === false)
console.assert(isNumber('2e10') === true)
console.assert(isNumber(' -90e3   ') === true)
console.assert(isNumber(' 1e') === false)
console.assert(isNumber(' e-1') === false)
console.assert(isNumber('   e3') === false)
console.assert(isNumber(' 6e-1') === true)
console.assert(isNumber(' 99e2.5 ') === false)
console.assert(isNumber('53.5e93') === true)
console.assert(isNumber(' --6 ') === false)
console.assert(isNumber('-+3') === false)
console.assert(isNumber('95a54e53') === false)
console.assert(isNumber('-.') === false)
console.assert(isNumber('.-') === false)
console.assert(isNumber('.e') === false)
console.assert(isNumber('+e') === false)
console.assert(isNumber('e.') === false)
console.assert(isNumber('+0e-') === false)
console.assert(isNumber(' +0e-') === false)
console.assert(isNumber(' 005047e+6') === false)
