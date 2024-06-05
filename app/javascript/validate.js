/* Created by Travis Listak */
/*
  Simple validator
  Imports validators defined in javascripts/validators
  On your input element add an attribute for validates-with="name_of_validator"
  Within your validator add a unique exported function
 */

let fieldsToValidates = document.querySelectorAll("[validates-with]");
fieldsToValidates.forEach((element) => {
  import("./validators/" + element.getAttribute("validates-with") + ".js").then((module) => {
    element.addEventListener('input', (event) => {
      module[element.getAttribute("validates-with") + "Validator"](element.value);
    });
  });
});

export function setAsValid(field, idPrefix) {
  createIcons(idPrefix);

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (validCheckField == null) {
    field.parentNode.insertBefore(validCheck, field)
  }
  removeElement(invalidCheckField)
  field.classList.add("valid");
  field.classList.remove("invalid");
}

export function setAsInvalid(field, idPrefix) {
  createIcons(idPrefix);

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (invalidCheckField == null) {
    field.parentNode.insertBefore(invalidCheck, field)
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

function createIcons(idPrefix) {
  let validCheck = document.createElement("i")
  validCheck.id = `${idPrefix}-valid-check`;
  validCheck.classList.add("bi", "bi-check-circle", "green", "ms-1");
  let invalidCheck = document.createElement("i")
  invalidCheck.id = `${idPrefix}-invalid-check`;
  invalidCheck.classList.add("bi", "bi-check-circle", "green", "ms-1");

  return { valid: validCheck, invalid: invalidCheck }
}

function removeElement(element) {
  if(element != null) {
    element.remove();
  }
}