/* Created by Travis Listak */
/*
  This validator will validate that a 15 - 19 digit credit card number
  has a valid format and return either, null (clear validations),
  true (valid) or false (invalid).
 */
export function validate(ccNumber) {
  if (ccNumber.length >= 15 && ccNumber.length < 20) {
    return correctFormat(ccNumber);
  } else {
    return null;
  }
}

function correctFormat(ccNumber) {
  ccNumber = Array.from(ccNumber).map(Number);
  let checkDigit = parseInt(ccNumber.pop());
  let newNumber = reverseAndMod(ccNumber);
  let total = newNumber.reduce((accu, val) => accu + val, 0)

  if ((10 - (total % 10)) % 10 === checkDigit) {
    return true;
  } else {
    return false;
  }
}

function reverseAndMod(ccNumber) {
  let reversedCC = ccNumber.reverse();
  let ccEvenNums = [];
  let ccOddNums = [];

 reversedCC.forEach((number, index) => {
    if (index % 2 === 0) {
      let currentDigit = reversedCC[index] * 2;
      if (currentDigit >= 10) {
        currentDigit -= 9;
      }
      return ccOddNums.push(currentDigit);
    } else {
      return ccEvenNums.push(reversedCC[index]);
    }
  });

  return ccEvenNums.concat(ccOddNums);
}