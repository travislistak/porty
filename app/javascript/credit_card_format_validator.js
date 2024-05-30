let cc_field = document.getElementById('credit_card_number');

cc_field.addEventListener('input', (event) => {
  readyToValidate(event.target.value);
});

function readyToValidate(ccNumber) {
  console.log("test");
  console.log(ccNumber)
  if (!ccNumber < 16) {
    validate(ccNumber);
  }
}

function validate(ccNumber) {
  ccNumber = Array.from(ccNumber.toString()).map(Number);
  let ccEvenNums = [];
  let ccOddNums = [];
  let displayNumber = ["x", "x", "x", "x"];
  let ccNumberValidation = document.getElementById('ccNumberValidation')

  displayNumber.push(ccNumber.slice(ccNumber.length - 4, ccNumber.length));

  let checkDigit = parseInt(ccNumber.pop());

// p 'Check Digit is: ' + checkDigit.to_s
  let reversedCC = ccNumber.reverse();
  console.log(reversedCC);

// p 'Reversed Number is: ' + reversedCC.to_s
  reversedCC.forEach((element, index) => {
    if (index % 2 === 0) {
      console.log(`index ${index}`)
      currentDigit = reversedCC[index] * 2;
      console.log(currentDigit);

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

  let newNumber = ccEvenNums + ccOddNums;
  console.log(`newNumber ${ccEvenNums}`);
  let modded = newNumber.reduce() % 10;

// p 'The modulo of the added array is: ' + modded.to_s
  let finalCheck = (10 - modded) % 10;

// p 'The final check is: ' + finalCheck.to_s
  if (finalCheck !== checkDigit) {
    p("Card: " + displayNumber.join.toString() + " is NOT a valid CC number.")
  } else {
    p("Card: " + displayNumber.join.toString() + " IS a valid CC number.")
  }
}