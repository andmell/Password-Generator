// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword(){

}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Clicking on Generate password should generate a series of prompts.
the following prompts should ask the user:
- how long the password is (between 8 and 128 characters) [input prompt]
- whether it includes uppercase, lowercase, numeric, and/or special characters [boolean] []
- generate password based on above metrics
*/


