/*
  Created by Travis Listak
 */
import {setAsValid, setAsInvalid, clearValidations} from "../validate"

// let ccField = document.getElementById('credit_card_number');

// ccField.addEventListener('input', (event) => {
//   readyToValidate(String(event.target.value));
// });

export function validateCCNumber(ccNumber) {
  console.log("validating");
  if (ccNumber.length >= 15 && ccNumber.length < 20) {
    hoochie(ccNumber);
  } else {
    clearValidations(ccField, "cc");
  }
}

function hoochie(ccNumber) {
  ccNumber = Array.from(ccNumber).map(Number);
  let checkDigit = parseInt(ccNumber.pop());
  let newNumber = reverseAndMod(ccNumber);
  let total = newNumber.reduce((accu, val) => accu + val, 0)

  if ((10 - (total % 10)) % 10 === checkDigit) {
    setAsValid(ccField, "cc");
  } else {
    setAsInvalid(ccField, "cc");
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