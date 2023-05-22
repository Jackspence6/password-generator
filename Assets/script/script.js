// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/* --------------------------------- password character options --------------------------------- */
const passwordOptions = {
  lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numericCharacters: "1234567890",
  specialCharacters: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
};

/* -------------------------------------- initial password -------------------------------------- */
var initialPassword = "";

/* ------------------------------------- questions for users ------------------------------------ */

const passwordLength = window.prompt(
  "how many characters do you want your password to be?"
);
const lCaseChars = window.confirm(
  "Do you want to include lowerCase characters?"
);
const uCaseChars = window.confirm(
  "Do you want to include upperCase characters?"
);
const nums = window.confirm("Do you want to include numbers?");
const sChars = window.confirm("Do you want to include special characters?");

if (passwordLength >= 8 && passwordLength <= 128) {
  if (lCaseChars) {
    console.log("yes");
    initialPassword = initialPassword.concat(
      passwordOptions.lowercaseCharacters
    );
    console.log(initialPassword);
  } else {
    console.log("no");
  }
  if (uCaseChars) {
    console.log("yes");
    initialPassword = initialPassword.concat(
      passwordOptions.uppercaseCharacters
    );
    console.log(initialPassword);
  } else {
    console.log("no");
  }
  if (nums) {
    console.log("yes");
    initialPassword = initialPassword.concat(passwordOptions.numericCharacters);
    console.log(initialPassword);
  } else {
    console.log("no");
  }
  if (sChars) {
    console.log("yes");
    initialPassword = initialPassword.concat(passwordOptions.specialCharacters);
    console.log(initialPassword);
  } else {
    console.log("no");
  }

  console.log(initialPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
