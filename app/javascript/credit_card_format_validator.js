let cc_field = document.getElementById('credit_card_number');

cc_field.addEventListener('input', (event) => {
  readyToValidate(event.target.value);
});

function readyToValidate(ccNumber) {
  if (String(ccNumber).length >= 16) {
    validate(ccNumber);
  }
}

function validate(ccNumber) {
  ccNumber = Array.from(ccNumber.toString()).map(Number);
  // console.log(`The ccNumber is ${ccNumber}`);

  let ccEvenNums = [];
  let ccOddNums = [];
  let displayNumber = ["x", "x", "x", "x"];
  displayNumber.push(ccNumber.toString().slice(String(ccNumber).length - 4, String(ccNumber).length));
  let checkDigit = parseInt(ccNumber.pop());

// p 'Check Digit is: ' + checkDigit.to_s
  let reversedCC = ccNumber.reverse();

  // console.log(`Reversed cc is ${reversedCC}`)
// p 'Reversed Number is: ' + reversedCC.to_s

  reversedCC.forEach((number, index) => {
    if (index % 2 === 0) {
      let currentDigit = reversedCC[index] * 2;
      if (currentDigit >= 10) {
        currentDigit -= 9;
        return ccOddNums.push(currentDigit);
      } else {
        return ccOddNums.push(currentDigit);
      }
    } else {
      return ccEvenNums.push(reversedCC[index]);
    }
  });

  let newNumber = ccEvenNums.concat(ccOddNums);
  let modded = newNumber.reduce((accu, val) => accu + val, 0) % 10;

  let finalCheck = (10 - modded) % 10;

  if (finalCheck !== checkDigit) {
    console.log("Card: " + displayNumber.join.toString() + " is NOT a valid CC number.")
  } else {
    console.log("Card: " + displayNumber.join.toString() + " IS a valid CC number.")
  }
}