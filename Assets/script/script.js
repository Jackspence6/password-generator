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

/* ----------------------- if statement to ensure character count is valid ---------------------- */
if (passwordLength >= 8 && passwordLength <= 128) {
  createPassword();
} else {
  console.log("not valid count");
}
/* ------------------------------- function to create the password ------------------------------ */
function createPassword() {
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
}

console.log(initialPassword);


/* ----------------------- function to add correct quantity of characters at random---------------------- */
function concatenateRandomPassword(str, count) {
  var stage1PW = [];

  for (let i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * str.length);
    var randomCharacters = str[randomIndex];
    stage1PW.push(randomCharacters);
  }
return stage1PW;

}

var result1 = concatenateRandomPassword(initialPassword, passwordLength);

console.log(result1);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
