// Assignment Code
var generateBtn = document.querySelector("#generate");

/* -------------------- Declaring result4 outside the writePassword function -------------------- */
var result4;

/* ----------------- Function that deploys when "generate password" is clicked ---------------- */
function writePassword() {
  /* --------------------------------- password character options --------------------------------- */
  const passwordOptions = {
    lowercaseCharacters: "abcdefghijklmnopqrstuvwxyz",
    uppercaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numericCharacters: "1234567890",
    specialCharacters: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  };

  /* -------------------------------------- initial password -------------------------------------- */
  var initialPassword = "";

  /* ----------------------- questions for user to determine password length ---------------------- */
  const passwordLength = window.prompt(
    "How many characters do you want your password to be?\n" + "Please select a number between 8 and 128."
  );

  /* ----------------------- if statement to ensure character count is valid ---------------------- */
  if (passwordLength >= 8 && passwordLength <= 128) {
    // Initialize constants with default value
    var lCaseChars = false;
    var uCaseChars = false;
    var nums = false;
    var sChars = false;

    // Questions for users to determine password characteristics
    const lCaseCharsResponse = window.confirm(
      "Do you want to include lowercase characters?"
    );
    const uCaseCharsResponse = window.confirm(
      "Do you want to include uppercase characters?"
    );
    const numsResponse = window.confirm("Do you want to include numbers?");
    const sCharsResponse = window.confirm(
      "Do you want to include special characters?"
    );

    // Assign users response to variables
    lCaseChars = lCaseCharsResponse;
    uCaseChars = uCaseCharsResponse;
    nums = numsResponse;
    sChars = sCharsResponse;

    if (!lCaseChars && !uCaseChars && !nums && !sChars) {
      console.log("Invalid password characteristic count");
      window.alert("Please select at least 1 option!")
      // Stop password creation if character count is invalid
      return;
    }

    createPassword();
  } else {
    console.log("Invalid character count. Password not generated.");
    window.alert("Please select a number between 8 and 128!")

    // Stop password creation if character count is invalid
    return;
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
      initialPassword = initialPassword.concat(
        passwordOptions.numericCharacters
      );
      console.log(initialPassword);
    } else {
      console.log("no");
    }
    if (sChars) {
      console.log("yes");
      initialPassword = initialPassword.concat(
        passwordOptions.specialCharacters
      );
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

  /* ------------------------------------- Password formatting ------------------------------------ */
  // Change array to string
  var result2 = result1.toString();
  console.log(result2);

  //Remove quotes
  var result3 = result2.replace(/'/g, "");

  // Remove commas
  var result4 = result3.replace(/,\s*/g, "");

  console.log(result4);

  /* ----------------------- Assigning the password to the HTML text element ---------------------- */
  var passwordText = document.querySelector("#password");
  passwordText.value = result4;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
