/*
  Created by Travis Listak
 */

/*
  Always 9 digits long
  First 4 specify routing symbol
  Next 4 identify the institution
  Finial digit is the checksum digit

  1. Multiply the individual digit a follows
    Firt digit by 3
    Second Digit by 7
    Third Digit by 1
    Continue this 3 more times for all 9 digit. (4th digit 3, 5th digit 7, 6th digit 1...)
    0, 1, 2, * (3, 7, 1)
    3, 4, 5, * (3, 7, 1)
    6, 7, 8, * (3, 7, 1)

 2. Add up all the digits

 3. Check if the sum is a multiple of 10 (%10)
*/

routingNumber = ARGV.last

if routingNumber.nil?
  p "Please enter a valid, 9 digit routing number."
  abort
end

if routingNumber.match?(/\d{9}/)

  routingNumber = routingNumber.split('')
  total = 0

# Test 123456789 = 20 53 86

0.step(6, 3) do |i|
total += routingNumber[i].to_i * 3
total += routingNumber[i + 1].to_i * 7
total += routingNumber[i + 2].to_i
end

# Check if the number is diviible by 10, if so the format is valid.
  if total % 10 != 0
p "The routing number #{routingNumber.join} format is invalid."
else
p "The routing number #{routingNumber.join} format is valid!"
end

else
p "Please enter a valid, 9 digit routing number."
end

