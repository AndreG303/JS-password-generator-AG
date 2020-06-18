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


// generatePassword function should be below
function generatePassword() {
  // *********************** function logic **********************
  // THEN I am presented with a series of prompts for password criteria
  // ??????? what series
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // ????? i thought that is a given

  // collected all the data here *************************
  // ************ 1 PROMPT *************
  // ************ need validation ***********
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // we need a prompt here and ask for the length from the user
  // check IF the input number is < 8 and > 128 

  var passLength = prompt(
    "choose a password length between 8 and 128"
  );
  var confirmLength = parseInt(passLength);
  if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
    alert("Error: Please generate again and choose a length btw 8 and 128");
    return;
  }
 
  // for (var i =8; i>= 128; i ++){
  //  prompt("choose a length between 8 and 128")
  // }



  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // each prompt needs to be validated...
  // in this case, we should probably use a function to turn the length into a number

  var allCharacters = [];
  var pickLowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
  var pickUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var pickNumbers = "0123456789".split('');
  var pickSpecialChar = "!@#$%^&*()+?/{-<|>".split('');


  // ************** 4 confirms **************
  // WHEN prompted for character types to include in the password
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  // we need a confirm to ask the user if they want to use lowercase
  // we need a confirm to ask the user if they want to use uppercase
  // we need a confirm to ask the user if they want to use numeric
  // we need a confirm to ask the user if they want to use special characters

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


  // if the usewr has an empty collection of characters alert
  if (allCharacters.length === 0) {
    alert("You must choose at least one character type. Please generate aganin");
    return;
  }


  // end of "collected all the data here" *************************
  // using the number from above and the 4 booleans

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // all the information is gathered (all prompts are finished getting input)
  // all the HARD logic goes here ????????
  var endPassword = "";
  for(var i=0; i<confirmLength; i++){
    allCharacters[Math.floor(Math.random()*allCharacters.length)]
    endPassword += allCharacters[Math.floor(Math.random()*allCharacters.length)]
  }
  return endPassword;
}
  

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // either do an alert with password... or just check to see if my variable has a password

  // *********************** end function logic **********************

  // Add event listener to generate button
  // WHEN I click the button to generate a password
  generateBtn.addEventListener("click", writePassword);
