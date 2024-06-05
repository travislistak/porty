/* Created by Travis Listak */
/*
  Simple validator
  Imports validators defined in javascripts/validators
  On your input element add an attribute for validates-with="name_of_validator"
  Within your validator add a unique exported function
 */

let fieldsToValidates = document.querySelectorAll("[validates-with]");
fieldsToValidates.forEach((element) => {
  let validatorName = element.getAttribute("validates-with");
  import("./validators/" + validatorName + ".js").then((module) => {
    element.addEventListener('input', (event) => {
      let valid = module[validatorName + "Validator"](element.value);

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

export function setAsValid(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (validCheckField == null) {
    field.parentNode.insertBefore(validCheck(idPrefix), field)
  }
  removeElement(invalidCheckField)
  field.classList.add("valid");
  field.classList.remove("invalid");
}

export function setAsInvalid(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (invalidCheckField == null) {
    field.parentNode.insertBefore(invalidCheck(idPrefix), field)
  }
  removeElement(validCheckField);
  field.classList.add("invalid");
  field.classList.remove("valid");
}

export function clearValidations(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`

  field.classList.remove("valid", "invalid");
  removeElement(document.getElementById(validId));
  removeElement(document.getElementById(invalidId));
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