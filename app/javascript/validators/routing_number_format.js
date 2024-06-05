/*
  Created by Travis Listak
 */

/*
  MICR FORMAT ONLY

  Always 9 digits long
  First 4 specify routing symbol
  Next 4 identify the institution
  Finial digit is the check digit

  1. Take groups of three numbers, add them, then multiple by the following:
    First group by 3
    Second group by 7
    Third group by 1

 2. Check if the sum of all the groups together is a multiple of 10 (%10)
*/
import {setAsValid, setAsInvalid, clearValidations} from "../validate"

let routingNumberField = document.getElementById('routing_number');

routingNumberField.addEventListener('input', (event) => {
  readyToValidate(String(event.target.value));
});

function readyToValidate(routingNumber) {
  if (routingNumber.length == 9) {
    validate(routingNumber);
  } else {
    clearValidations(routingNumberField, "rn");
  }
}

function validate(routingNumber) {
  routingNumber = Array.from(routingNumber).map(Number);
  let total = 0;

  for (i = 0; i < 3; i++) {
    let groupTotal =
      routingNumber[i] +
      routingNumber[i + 3] +
      routingNumber[i + 6]

    switch(i) {
      case 0: {
        total += groupTotal * 3;
        break;
      }
      case 1: {
        total += groupTotal * 7;
        break;
      }
      default: {
        total += groupTotal;
        break;
      }
    }
  }

  if (total % 10 === 0) {
    setAsValid(routingNumberField, "rn");
  } else {
    setAsInvalid(routingNumberField, "rn");
  }
};