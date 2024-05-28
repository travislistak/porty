let cc_field = document.getElementById('credit_card_number');

cc_field.addEventListener('input', readyToValidate());

function readyToValidate() {
  if (!this.value < 16) {
    validate(this.value);
  }
}

function validate(ccNumber) {
  let ccEvenNums = [];
  let ccOddNums = [];
  let displayNumber = ["x", "x", "x", "x"];
  let ccNumberValidation = document.getElementById('ccNumberValidation')

  displayNumber.push(ccNumber.slice(
    ccNumber.length - 4,
    ccNumber.length
  ));

  let checkDigit = parseInt(ccNumber.pop());

// p 'Check Digit is: ' + checkDigit.to_s
  let reversedCC = ccNumber.reverse();

// p 'Reversed Number is: ' + reversedCC.to_s
  reversedCC.each_index((index) => {
    let currentDigit;

    if (index % 2 === 0) {
      currentDigit = parseInt(reversedCC[index]) * 2;

      if (currentDigit >= 10) {
        currentDigit -= 9;
        return ccOddNums << parseInt(currentDigit)
      } else {
        return ccOddNums << parseInt(currentDigit)
      }
    } else {
      return ccEvenNums << parseInt(reversedCC[index])
    }
  });

  let newNumber = ccEvenNums + ccOddNums;
  let modded = newNumber.inject(0, "+") % 10;

// p 'The modulo of the added array is: ' + modded.to_s
  let finalCheck = (10 - modded) % 10;

// p 'The final check is: ' + finalCheck.to_s
  if (finalCheck !== checkDigit) {
    p("Card: " + displayNumber.join.toString() + " is NOT a valid CC number.")
  } else {
    p("Card: " + displayNumber.join.toString() + " IS a valid CC number.")
  }
}