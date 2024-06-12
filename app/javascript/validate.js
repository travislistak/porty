/* Created by Travis Listak */
/*
  Simple validator
  Dynamically imports validators defined in javascripts/validators, creates an event listner on the input field,
  and based on the validator response will create an appropriate icon and change input outline color.

  Responses from validators
  * null  -> clear validations (hide icon, remove input outline)
  * true  -> valid             (show valid icon, add green input outline)
  * false -> invalid           (show invalid icon, add red input outline)

  To use this validator:
  1. On your input element add an attribute for validates-with="namdOfValidator".
  2. In javascript/validators create a validator with the name name as used above.
  3. Within your validator create an exported function with the 'validate'.
     This function will return null, true, or false.
  4. Add an import to you JS builder.

  example:
  1. DOM element
     `<input type="text" name="credit_card_number" id="credit_card_number" value="" class="form-control" validates-with="creditCardFormat">`
  2. Create javascripts/validators/creditCardFormat.js
  3. Within creditCardFormat.js create an `export function validate(inputValue)`
     It will take inputValue as a parameter and then return null, true, or false.
  4. Using esbuild with Rails 7 `import "./validators/creditCardFormat"`.
 */

/*
  If not using Turbo then change the event to be when the DOM is loaded.
  Turbo uses page caching and hitting the back button is a restoration visit so we need to
  find the elements needing a validator everytime the page is loaded.
 */

document.addEventListener("turbo:load", () => {
  setValidators();
})

function setValidators() {
  // Select all elements in DOM with a `validates-with` attribute
  let fieldsToValidates = document.querySelectorAll("[validates-with]");

  fieldsToValidates.forEach((element) => {
    // Pull name from the element's `validates-with` attribute
    let validatorName = element.getAttribute("validates-with");

    // Import the matching validator.js file
    import("./validators/" + validatorName + ".js").then((module) => {
      element.addEventListener('input', (event) => {
        // Call the module's exported function when event is triggered
        let valid = module["validate"](element.value);

        if (valid === null) {
          clearValidations(element, validatorName)
        } else if (valid) {
          setAsValid(element, validatorName);
        } else {
          setAsInvalid(element, validatorName);
        }
      });
    });
  });
}

function setAsValid(field, idPrefix) {
  let validCheckField = document.getElementById(`${idPrefix}-valid-check`);
  let invalidCheckField = document.getElementById(`${idPrefix}-invalid-check`);

  if (validCheckField == null) {
    field.parentNode.insertBefore(validCheck(idPrefix), field)
  }
  removeElement(invalidCheckField)
  field.classList.add("valid");
  field.classList.remove("invalid");
}

function setAsInvalid(field, idPrefix) {
  let validCheckField = document.getElementById(`${idPrefix}-valid-check`);
  let invalidCheckField = document.getElementById(`${idPrefix}-invalid-check`);

  if (invalidCheckField == null) {
    field.parentNode.insertBefore(invalidCheck(idPrefix), field)
  }
  removeElement(validCheckField);
  field.classList.add("invalid");
  field.classList.remove("valid");
}

function clearValidations(field, idPrefix) {
  field.classList.remove("valid", "invalid");
  removeElement(document.getElementById(`${idPrefix}-valid-check`));
  removeElement(document.getElementById(`${idPrefix}-invalid-check`));
}

function validCheck(idPrefix) {
  let validCheck = document.createElement("i")
  validCheck.id = `${idPrefix}-valid-check`;
  validCheck.classList.add("bi", "bi-check-circle", "green", "ms-1");
  return validCheck
}

function invalidCheck(idPrefix) {
  let invalidCheck = document.createElement("i")
  invalidCheck.id = `${idPrefix}-invalid-check`;
  invalidCheck.classList.add("bi", "bi-exclamation-circle", "red", "ms-1");
  return invalidCheck;
}

function removeElement(element) {
  if(element != null) {
    element.remove();
  }
}