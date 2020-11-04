//comment for git add
// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUppercase;
var confirmLowercase;
var confirmSpecial;
var confirmNumbers;


//values for variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "~!@#$%^&*()_+{}:?><;.,";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
