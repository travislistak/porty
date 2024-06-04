let validCheck = document.createElement("i")
validCheck.classList.add("bi", "bi-check-circle", "green", "ms-1");
let invalidCheck = document.createElement("i")
invalidCheck.classList.add("bi", "bi-check-circle", "red", "ms-1");

export function setAsInvalid(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`
  invalidCheck.id = invalidId;
  validCheck.id = validId;

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (invalidCheckField == null) {
    field.parentNode.insertBefore(invalidCheck, field)
  }
  removeElement(validCheckField);
  field.classList.add("invalid");
  field.classList.remove("valid");
}

export function setAsValid(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`
  invalidCheck.id = invalidId;
  validCheck.id = validId;

  let invalidCheckField = document.getElementById(invalidId);
  let validCheckField = document.getElementById(validId);

  if (validCheckField == null) {
    field.parentNode.insertBefore(validCheck, field)
  }
  removeElement(invalidCheckField)
  field.classList.add("valid");
  field.classList.remove("invalid");
}

export function clearValidations(field, idPrefix) {
  let invalidId = `${idPrefix}-invalid-check`;
  let validId = `${idPrefix}-valid-check`

  field.classList.remove("valid", "invalid");
  removeElement(document.getElementById(validId));
  removeElement(document.getElementById(invalidId));
}

export function removeElement(element) {
  if(element != null) {
    element.remove();
  }
}