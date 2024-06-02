/*
  Created by Travis Listak
 */

let ccField = document.getElementById('credit_card_number');
let validCheck = document.createElement("i")
validCheck.id = "valid-check";
validCheck.classList.add("bi", "bi-check-circle", "green", "ms-1");
let invalidCheck = document.createElement("i")
invalidCheck.id = "invalid-check";
invalidCheck.classList.add("bi", "bi-check-circle", "red", "ms-1");

ccField.addEventListener('input', (event) => {
  readyToValidate(String(event.target.value));
});

function readyToValidate(ccNumber) {
  if (ccNumber.length >= 16 && ccNumber.length < 20) {
    validate(ccNumber);
  } else {
    clearValidations();
  }
}

function validate(ccNumber) {
  ccNumber = Array.from(ccNumber).map(Number);
  let checkDigit = parseInt(ccNumber.pop());
  let newNumber = reverseAndMod(ccNumber);
  let total = newNumber.reduce((accu, val) => accu + val, 0)

  if ((10 - (total % 10)) % 10 === checkDigit) {
    setAsValid(ccField);
  } else {
    setAsInvalid(ccField);
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

function setAsInvalid(field) {
  console.log("setting as invalid");
  if (document.getElementById("invalid-check") == null) {
    field.parentNode.insertBefore(invalidCheck, field)
  }
  removeElement(document.getElementById("valid-check"));
  field.classList.add("invalid");
  field.classList.remove("valid");
}

function setAsValid(field) {
  console.log("setting as valid");
  if (document.getElementById("valid-check") == null) {
    field.parentNode.insertBefore(validCheck, field)
  }
  removeElement(document.getElementById("invalid-check"))
  field.classList.add("valid");
  field.classList.remove("invalid");
}

function clearValidations() {
  ccField.classList.remove("valid", "invalid");
  removeElement(document.getElementById("valid-check"));
  removeElement(document.getElementById("invalid-check"));
}

function removeElement(element) {
  if(element != null) {
    element.remove();
  }
}