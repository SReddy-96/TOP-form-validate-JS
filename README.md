# Form validation with JavaScript

## Objective

## Model

### Index

| Desktop      | Mobile      |
| ------------ | ----------- |
| ![desktop]() | ![mobile]() |

## Problems Encountered

## New Skills Acquired

## Technologies Used

- HTML
- CSS
- JavaScript
- Webpack

## sudo

### country & postcodes
```
United kingdom =
GB: [
"^(GB-)?\\[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",
"United Kingdom PostCode must follow the pattern: e.g. SW1A 1AA or SW1A1AA",
],
United States =
US: [
"^(US-)?\\d{5}$",
"United States ZIPs must have exactly 5 digits: e.g. US-75012 or 75012",
],
South Korea =
KR:[
"^(KR-)?\\d{5}$",
"South Korea ZIPs must have exactly 5 digits: e.g. KR-75012 or 75012",
],
Canada =
CA:[
"^(CA-)?\\[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]",
"Canada ZIPs must follow the pattern: e.g. CA-K1A 0B1 or K1A 0B1",
],
France =
FR: [
"^(FR-)?\\d{5}$",
"France ZIPs must have exactly 5 digits: e.g. FR-75012 or 75012",
],  
Spain =
ES:[
"^(ES-)?\\d{5}$",
"Spain ZIPs must have exactly 5 digits: e.g. ES-75012 or 75012",
],
Germany =
DE: [
"^(DE-)?\\d{5}$",
"Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
],
The Netherlands =  
 NL: [
"^(NL-)?\\d{4}\\s\*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
Italy = 
    IT: [
      "^(IT-)?\\d{5}$",
"Italy ZIPs must have exactly 5 digits: e.g. IT-75012 or 75012",
],
Switzerland =
CH: [
"^(CH-)?\\d{4}$",
"Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
],
```
email - typeMismatch - tooShort - valueMissing
```
function validEmail(email){
if(email.validity.typeMismatch){
email.setCustomValidity("I am expecting an email address!");
} else if(email.validity.tooShort){
email.setCustomValidity(`email needs to be more than  ${email.minLength} characters!`);
} else if(email.validity.valueMissing) {
email.setCustomValidity("Please enter an email address!");
} else{
email.setCustomValidity("");
}
}
```
country - handled

postcode - handled

password - valueMissing - tooShort - patternMismatch
```
function validatePassword(password){
  if(password.validity.valueMissing){
    password.setCustomValidity("Please enter a password!");
} else if(password.validity.tooShort){
  password.setCustomValidity("Your password is too short");
} else if(password.validity.patternMismatch){
  password.setCustomValidity("Please use Uppercase, Lowercase and Numbers in your password");
}else{
  password.setCustomValidity("");
}
}
```
confirm password - matching the value of the password with the confirmation password

password pattern - number, uppercase, lowercase "^(?=._\d)(?=._[a-z])(?=._[A-Z])(?!._\s).\*$"
```
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

function validatePasswordConfirmation(){
if(password.value != confirm_password.value) {
confirm_password.setCustomValidity("Passwords Don't Match");
} else {
confirm_password.setCustomValidity('');
}
}

password.onchange = validatePasswordConfirmation;
confirm_password.onkeyup = validatePasswordConfirmation;
```