// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generatePassword function 
function generatePassword() {


  // collection of data and validation of password lenght 

  var passLength = prompt(
    "Choose a password length between 8 and 128"
  );
  var confirmLength = parseInt(passLength);
  if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    alert("Error: Please generate again and choose a length btw 8 and 128");
    return;
  }


  // Variables needed for password content 

  var allCharacters = [];
  var pickLowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  var pickUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var pickNumbers = "0123456789".split('');
  var pickSpecialChar = "!@#$%^&*()+?/{-<|>".split('');


  // Confirmation of data and validation of characters

  var confirmLowerCase = confirm(
    "Do You Want To Use Lowercase in your password?"
  );
  if (confirmLowerCase === true) {
    for (var i = 0; i < pickLowerCase.length; i++) {
      allCharacters.push(pickLowerCase[i]);
    }
  }


  var confirmUppercase = confirm(
    "Do You Want To Use Uppercase in your password?"
  );
  if (confirmUppercase === true) {
    for (var i = 0; i < pickUpperCase.length; i++) {
      allCharacters.push(pickUpperCase[i]);
    }
  }


  var confirmNumbers = confirm(
    "Do You Want To Use Numbers in your password?"
  );
  if (confirmNumbers === true) {
    for (var i = 0; i < pickNumbers.length; i++) {
      allCharacters.push(pickNumbers[i]);
    }
  }

  var confirmSpecialChar = confirm(
    "Do You Want To Use Special Characters in your password?"
  );
  if (confirmSpecialChar === true) {
    for (var i = 0; i < pickSpecialChar.length; i++) {
      allCharacters.push(pickSpecialChar[i]);
    }
  }


  // Alert if the user has an empty collection of characters  

  if (allCharacters.length === 0) {
    alert("You must choose at least one character type. Please generate again");
    return;
  }

  // all the information is gathered (all prompts are finished getting input) Then password is generated 

  var endPassword = "";
  for (var i = 0; i < confirmLength; i++) {
    allCharacters[Math.floor(Math.random() * allCharacters.length)]
    endPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)]
  }
  return endPassword;
}


// Event listener to generate button, I click the button to generate a password
generateBtn.addEventListener("click", writePassword);
