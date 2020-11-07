//comment for git add
// Assignment Code
var generateBtn = document.querySelector("#generate");

// function writePassword() {
//   var password = generatePassword();
function generatePassword(){
  //values for variables
var characterNumber = "0123456789";
var includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeLowercase = "abcdefghijklmnopqrstuvwxyz";
var includeSymbols = "!@#$%^&*()_-+?/{}[].,";

const passwordLength = document.getElementById ("characterNumber")


// Write password to the #password input
let char ="";
if (characterNumber.checked){
  char += characterNumber;
}
if (includeUppercase.checked){
  char += includeUppercase;
}
if (includeLowercase.checked){
  char += includeLowercase;
}
if (includeSymbols.checked){
  char += includeSymbols;
}

  for (var i = 0; i < passwordLength; i++){
    password = password +
    char.charAt(Math.floor(Math.random()*
    (char.length - 1)));
  }
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}      
generateBtn.addEventListener("click", generatePassword);





  
 
