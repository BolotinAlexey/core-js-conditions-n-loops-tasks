/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) return true;
  if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (!a || !b || !c) return false;
  if (a > b + c || b > a + c || c > a + b) return false;
  if (a !== b && a !== c && b !== c) return false;
  return true;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const res = '';
  if (!num) return res;
  if (num >= 10) return `X${convertToRomanNumerals(num - 10)}`;
  if (num === 9) return `${res}IX`;
  if (num >= 5) return `V${convertToRomanNumerals(num - 5)}`;
  if (num === 4) return `${res}IV`;
  if (num >= 1) return `I${convertToRomanNumerals(num - 1)}`;
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
// const digit = [
//   'zero',
//   'one',
//   'two',
//   'three',
//   'four',
//   'five',
//   'six',
//   'seven',
//   'eight',
//   'nine',
// ];
// function convertNumberToString(numberStr) {
//   let res = '';
//   for (let i = 0; i < numberStr.length; i += 1) {
//     if (numberStr[i] === ',' || numberStr[i] === '.') res += 'point';
//     else if (numberStr[i] === '-') res += 'minus';
//     else res += digit[+numberStr[i]];
//     if (i !== numberStr.length - 1) res += ' ';
//   }
//   return res;
// }
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res += 'two';
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res += 'five';
        break;
      case '6':
        res += 'six';
        break;
      case '7':
        res += 'seven';
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '-':
        res += 'minus';
        break;

      default:
        res += 'point';
        break;
    }
    if (i !== numberStr.length - 1) res += ' ';
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
// function isContainNumber(num, digit) {
//   return getIndexOf(num.toString(), digit.toString()) !== -1;
// }
function isContainNumber(num, digit) {
  if (num !== digit && num < 10) return false;
  const del = Math.floor(num / 10);
  if (num - del * 10 === digit) return true;
  return isContainNumber(del, digit);
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */

// for (let i = 0; i < arr; i+=1) {
//
// }
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  let sumLeft = arr[0];
  let sumRight = 0;
  for (let i = 2; i < arr.length; i += 1) {
    sumRight += arr[i];
  }
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (sumLeft === sumRight) return i;
    sumLeft += arr[i];
    sumRight -= arr[i + 1];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
  }
  let left = 0;
  let top = 0;
  let right = size - 1;
  let down = size - 1;
  let x = 0;
  let y = 0;
  let dir = 'right';

  for (let i = 1; i <= size * size; i += 1) {
    arr[y][x] = i;
    if (x === right && dir === 'right') {
      dir = 'down';
      right -= 1;
      top += 1;
    } else if (y === down && dir === 'down') {
      dir = 'left';
    } else if (x === left && dir === 'left') {
      dir = 'top';
      left += 1;
      down -= 1;
    } else if (y === top && dir === 'top') {
      dir = 'right';
    }
    switch (dir) {
      case 'right':
        x += 1;
        break;
      case 'left':
        x -= 1;
        break;
      case 'down':
        y += 1;
        break;
      case 'top':
        y -= 1;
        break;
      default:
        break;
    }
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const arr = matrix;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const topLeft = arr[top][left + i];
      const bottom = right;
      arr[top][left + i] = arr[bottom - i][left];
      arr[bottom - i][left] = arr[bottom][right - i];
      arr[bottom][right - i] = arr[top + i][right];
      arr[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sort(arr) {
  if (arr.length < 2) return arr;
  const base = arr[Math.floor(arr.length / 2)];
  const middle = [];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === base) middle.push(arr[i]);
    else if (arr[i] < base) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...sort(left), ...middle, ...sort(right)];
}
function sortByAsc(arr) {
  const res = arr;
  const sortArr = sort(arr);
  for (let i = 0; i < arr.length; i += 1) {
    res[i] = sortArr[i];
  }

  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let temp = str;
  for (let j = 0; j < iterations; j += 1) {
    let left = '';
    let right = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2) right += temp[i];
      else left += temp[i];
    }
    temp = left + right;
    if (temp === str) j = iterations - (iterations % (j + 1)) - 1;
  }
  return temp;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = [];
  const numberStr = `${number}`;
  let i;
  for (let index = 0; index < numberStr.length; index += 1) {
    arr.push(numberStr[index]);
  }
  for (i = arr.length - 2; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) break;
  }

  if (!i) return number;
  let nearest = i + 1;
  for (let j = i + 1; j < arr.length; j += 1) {
    if (arr[j] < arr[nearest] && arr[j] > arr[i]) nearest = j;
  }

  [arr[i], arr[nearest]] = [arr[nearest], arr[i]];
  const left = [];
  const right = [];
  for (let j = 0; j < arr.length; j += 1) {
    if (j > i) right.push(arr[j]);
    if (j <= i) left.push(arr[j]);
  }
  const resArr = [...left, ...sortByAsc(right)];
  let resStr = '';
  for (let k = 0; k < resArr.length; k += 1) {
    resStr += resArr[k];
  }

  return +resStr;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
