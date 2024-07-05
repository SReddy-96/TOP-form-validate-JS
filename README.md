# Form validation with JavaScript

## Objective

Create a form with Email, password, confirm password, Country and Postcode/ZIP and use live inline validation to notify the user if the input is valid or not.
### Key Points:
- Use `novalidate` in the form, so ALL validation is done through JavaScript.
- Use colors to notify the user if the input is valid. 
- Display useful messages when the user's input is invalid.
- Use Constraint Validation API to check and show validation.

## Model

### Index
![desktop](./validatingWithJS.png)

This was a great little project to use the knowledge I gained previously about creating forms and using browser validation. It was really interesting to step away from that and create my own validation. Using the required attribute and then checking this with `name.validity.valueMissing` to see if the user has indeed inputted any data.

Also, setting attributes for `minLength` and checking this with `tooShort` where I can use `setCustomValidity` to set my own messages to display and using `reportValidity` to display them. Only displaying these messages when the form is submitted so only reporting this when submit was passed through to the function.

Each input has an event listener to listen on input which in turn changes the valid and invalid states, which then is handled by the CSS pseudo class that displays either a green or red border when the user is inputting their form data.

For the Countries, I was able to create an object of countries which has the pattern for each postcode and a `setCustomValidity` message so when the input is not valid it can then throw the correct error message to the user.

## Problems Encountered
- Custom validity messages aren't displaying.
- Handling the live inline validation.
- How to change the pattern on the Postcode/ZIP input.

## New Skills Acquired
- Using `reportValidity` to show the message, but only when the form is submitted.
- Using event listeners to listen out for change and input.
- Setting a new `RegExp` to the input when the country input is changed.

## Technologies Used

- HTML
- CSS
- JavaScript