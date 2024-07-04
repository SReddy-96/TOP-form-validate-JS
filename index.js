document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");
  const country = document.getElementById("Country");
  const postcode = document.getElementById("postcode");

  email.addEventListener("input", function () {
    validEmail(this);
  });
  password.addEventListener("input", function () {
    validatePassword();
  });
  confirm_password.addEventListener("input", function () {
    validatePasswordConfirmation();
  });

  country.onchange = checkPostcode;
  postcode.oninput = checkPostcode;
});

// when the form is submitted, it shows the custom validity
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    validEmail(email, "submit");
    event.preventDefault();
  } else if (!password.validity.valid) {
    validatePassword("submit");
    event.preventDefault();
  } else if (!confirm_password.validity.valid) {
    validatePasswordConfirmation("submit");
    event.preventDefault();
  } else if (!postcode.validity.valid) {
    checkPostcode("submit");
    event.preventDefault();
  }
});

//  checks the postcode RegExp alongside the country postcode pattern
function checkPostcode(submit) {
  const constraints = {
    GB: [
      "^(GB-)?[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",
      "United Kingdom PostCode must follow the pattern: e.g. SW1A 1AA or SW1A1AA",
    ],
    US: [
      "^(US-)?\\d{5}$",
      "United States ZIPs must have exactly 5 digits: e.g. US-75012 or 75012",
    ],
    KR: [
      "^(KR-)?\\d{5}$",
      "South Korea ZIPs must have exactly 5 digits: e.g. KR-75012 or 75012",
    ],
    CA: [
      "^(CA-)?[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]$",
      "Canada ZIPs must follow the pattern: e.g. CA-K1A 0B1 or K1A 0B1",
    ],
    FR: [
      "^(FR-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. FR-75012 or 75012",
    ],
    ES: [
      "^(ES-)?\\d{5}$",
      "Spain ZIPs must have exactly 5 digits: e.g. ES-75012 or 75012",
    ],
    DE: [
      "^(DE-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    NL: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
    IT: [
      "^(IT-)?\\d{5}$",
      "Italy ZIPs must have exactly 5 digits: e.g. IT-75012 or 75012",
    ],
    CH: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
  };

  // Read the country id
  const country = document.getElementById("Country").value;

  // Get the NPA field
  const postcodeField = document.getElementById("postcode");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");

  if (constraint.test(postcodeField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    postcodeField.setCustomValidity("");
  } else {
    postcodeField.setCustomValidity(constraints[country][1]);
  }
  if (submit === "submit") {
    postcode.reportValidity();
  }
}

// email
function validEmail(email, submit) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else if (email.validity.tooShort) {
    email.setCustomValidity(
      `email needs to be more than  ${email.minLength} characters!`
    );
  } else if (email.validity.valueMissing) {
    email.setCustomValidity("Please enter an email address!");
  } else {
    email.setCustomValidity("");
  }
  if (submit === "submit") {
    email.reportValidity();
  }
}

// password
function validatePassword(submit) {
  const password = document.getElementById("password");
  if (password.validity.valueMissing) {
    password.setCustomValidity("Please enter a password!");
  } else if (password.validity.tooShort) {
    password.setCustomValidity("Your password is too short");
  } else if (password.validity.patternMismatch) {
    password.setCustomValidity(
      "Please use Uppercase, Lowercase and Numbers in your password"
    );
  } else {
    password.setCustomValidity("");
  }

  if (submit === "submit") {
    password.reportValidity();
  }
}

// confirm password
function validatePasswordConfirmation(submit) {
  const password = document.getElementById("password");
  const confirm_password = document.getElementById("confirm_password");
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
  if (submit === "submit") {
    confirm_password.reportValidity();
  }
}
