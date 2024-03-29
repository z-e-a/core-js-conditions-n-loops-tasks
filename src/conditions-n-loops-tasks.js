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
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;
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
  return (a === b || a === c || b === c) && a + b > c && a + c > b && b + c > a;
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
  function addI(str, numbI) {
    let result = str;
    for (let i = 0; i < numbI; i += 1) {
      result += 'I';
    }
    return result;
  }

  let result = '';
  const decades = Math.floor(num / 10);
  const units = num % 10;
  for (let i = 0; i < decades; i += 1) {
    result += 'X';
  }
  if (units <= 3) {
    result = addI(result, units);
  } else if (units === 4) {
    result += 'IV';
  } else if (units === 5) {
    result += 'V';
  } else if (units <= 8) {
    result += 'V';
    result = addI(result, units - 5);
  } else {
    result += 'IX';
  }
  return result;
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
function convertNumberToString(numberStr) {
  function toString(number) {
    switch (number) {
      case '0':
        return 'zero';
      case '1':
        return 'one';
      case '2':
        return 'two';
      case '3':
        return 'three';
      case '4':
        return 'four';
      case '5':
        return 'five';
      case '6':
        return 'six';
      case '7':
        return 'seven';
      case '8':
        return 'eight';
      case '9':
        return 'nine';
      default:
        return '';
    }
  }
  let result = '';
  const str = `${numberStr}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '-') {
      result += 'minus';
    } else if (str[i] === ',' || str[i] === '.') {
      if (result !== '') result += ' ';
      result += 'point';
    } else {
      if (result !== '') result += ' ';
      result += toString(str[i]);
    }
  }
  return result;
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
  let result = true;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[str.length - i - 1]) result = false;
  }
  return result;
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
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
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
function isContainNumber(num, digit) {
  const str = `${num}`;
  let result = false;
  for (let i = 0; i < str; i += 1) {
    if (str[i] === `${digit}`) {
      result = true;
      break;
    }
  }
  return result;
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
function getBalanceIndex(arr) {
  function checkBalance(array, pos) {
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (i < pos) {
        leftSum += array[i];
      } else if (i > pos) {
        rightSum += array[i];
      }
    }
    return leftSum === rightSum;
  }

  let result = -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    if (checkBalance(arr, i)) {
      result = i;
      break;
    }
  }
  return result;
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
  const directions = [
    { r: 0, c: 1 },
    { r: 1, c: 0 },
    { r: 0, c: -1 },
    { r: -1, c: 0 },
  ];

  const array = new Array(size);
  for (let i = 0; i < size; i += 1) {
    array[i] = new Array(size);
    for (let j = 0; j < size; j += 1) {
      array[i][j] = 0;
    }
  }

  let counter = 1;
  let currDir = 0;
  const currPos = { r: 0, c: 0 };
  let roundCntr = 0;

  while (roundCntr < size / 2) {
    if (array[currPos.r][currPos.c] === 0) {
      array[currPos.r][currPos.c] = counter;
    }

    if (
      currPos.r + directions[currDir].r < 0 ||
      currPos.r + directions[currDir].r > size - 1 ||
      currPos.c + directions[currDir].c < 0 ||
      currPos.c + directions[currDir].c > size - 1 ||
      array[currPos.r + directions[currDir].r][
        currPos.c + directions[currDir].c
      ] !== 0
    ) {
      currDir += 1;
      if (currDir >= directions.length) {
        currDir = 0;
        roundCntr += 1;
      }
    }
    currPos.r += directions[currDir].r;
    currPos.c += directions[currDir].c;
    counter += 1;
  }
  return array;
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
  const resulMatrix = matrix;
  const bufferMatrix = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i += 1) {
    bufferMatrix[i] = new Array(matrix.length);
    for (let j = 0; j < matrix.length; j += 1) {
      bufferMatrix[i][j] = matrix[matrix.length - j - 1][i];
    }
  }
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      resulMatrix[i][j] = bufferMatrix[i][j];
    }
  }
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
function sortByAsc(arr) {
  function quicksort(inputArr, low, high) {
    if (low < high) {
      const outputArr = inputArr;
      const x = outputArr[Math.floor((low + high - 1) / 2)];

      let i = low;
      let j = high - 1;
      do {
        while (outputArr[i] < x) i += 1;
        while (outputArr[j] > x) j -= 1;

        if (i <= j) {
          if (outputArr[i] > outputArr[j]) {
            const tmp = outputArr[j];
            outputArr[j] = outputArr[i];
            outputArr[i] = tmp;
          }
          i += 1;
          j -= 1;
        }
      } while (i <= j);
      if (i < high) quicksort(outputArr, i, high);
      if (j > low) quicksort(outputArr, low, j + 1);
    }
  }
  quicksort(arr, 0, arr.length);
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
  const inputArray = new Array(str.length);
  for (let i = 0; i < str.length; i += 1) {
    inputArray[i] = str[i];
  }
  const results = [];
  results[0] = str;
  const bufferArray = new Array(str.length);
  let step = 1;
  while (step <= iterations) {
    for (let j = 0; j < Math.floor(str.length / 2); j += 1) {
      bufferArray[j] = inputArray[j * 2];
      bufferArray[j + Math.floor(str.length / 2)] = inputArray[j * 2 + 1];
    }
    let isEquals = true;
    for (let k = 0; k < str.length; k += 1) {
      inputArray[k] = bufferArray[k];
      if (bufferArray[k] !== str[k]) isEquals = false;
    }
    if (isEquals) break;

    results[step] = '';
    for (let i = 0; i < str.length; i += 1) {
      results[step] += bufferArray[i];
    }

    step += 1;
  }
  return results[iterations % step];
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
  let result = 0;
  const bufferArray = [];
  const inputArray = [];
  let i = 0;
  let bufferVal = number;
  while (bufferVal >= 1) {
    bufferArray[i] = bufferVal % 10;
    i += 1;
    bufferVal = Math.floor(bufferVal / 10);
  }
  for (let ind = 0; ind < bufferArray.length; ind += 1) {
    inputArray[ind] = bufferArray[bufferArray.length - ind - 1];
  }

  let lastIndex = inputArray.length - 1;
  while (lastIndex > 0 && inputArray[lastIndex - 1] >= inputArray[lastIndex]) {
    lastIndex -= 1;
  }

  if (lastIndex !== 0) {
    let boundIndex = inputArray.length - 1;
    while (
      lastIndex > 0 &&
      inputArray[lastIndex - 1] >= inputArray[boundIndex]
    ) {
      boundIndex -= 1;
    }
    const tmp = inputArray[boundIndex];
    inputArray[boundIndex] = inputArray[lastIndex - 1];
    inputArray[lastIndex - 1] = tmp;

    const sortedArray = new Array(inputArray.length - lastIndex);
    for (let n = lastIndex; n < inputArray.length; n += 1) {
      sortedArray[n - lastIndex] = inputArray[n];
    }
    sortByAsc(sortedArray);

    for (let k = lastIndex; k < inputArray.length; k += 1) {
      inputArray[k] = sortedArray[k - lastIndex];
    }

    for (let t = 0; t < inputArray.length - 1; t += 1) {
      result += inputArray[t] * 10 ** (inputArray.length - 1 - t);
    }
    result += inputArray[inputArray.length - 1];
  } else {
    result = number;
  }
  return result;
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
