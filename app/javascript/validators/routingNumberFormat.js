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

export function validate(routingNumber) {
  if (routingNumber.length == 9) {
    return correctFormat(routingNumber);
  } else {
    return null;
  }
}

function correctFormat(routingNumber) {
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
    return true;
  } else {
    return false;
  }
};