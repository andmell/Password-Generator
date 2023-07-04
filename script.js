// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// program to get a random item from an array

// function getRandomItem (arr) {

//   // get random index value
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   // get random
//   const item = arr[randomIndex];

//   return item;
// }

// const arrayNumeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const arrayAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// const arraySpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '~', '`'];




// const result = getRandomItem(arrayNumeric + arrayAlpha + arraySpecial);
// console.log(result);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  function generatePassword(){
    let passwordInteger = prompt("Specify a length for your password","A number between 8 and 128");
    while (!/^[0-9]+$/.test(passwordInteger)) { //a super complex boolean meant to test if the input is actually a number and not some nonsense. Thank you Umang Galaiya for this!
    alert("You did not enter a number."); return
    }if (passwordInteger < 8) {
      alert("Please choose a number between 8 and 128"); return //need to return after the alert to ensure that the function ceases if a wrong number is used.
    } else if (passwordInteger > 128) {
      alert("Please choose a number between 8 and 128"); return
    } 
    let passwordUppercase = confirm("Should your password have uppercase letters?");
    let passwordLowercase = confirm("Should your password have lowercase letters?");
    let passwordNumeric = confirm("Should your password have numbers in it?");
    let passwordSpecial = confirm("Should your password have special characters in it?");
    let passLength = passwordInteger;

    if (passwordUppercase === true) {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordLowercase === true) {
      charset = "abcdefghijklmnopqrstuvwxyz"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordNumeric === true) {
      charset = "0123456789"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordSpecial === true) {
      charset = "~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordLowercase === true){
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordLowercase === true &&  passwordNumeric === true){
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordLowercase === true && passwordNumeric === true && passwordSpecial === true) {
      charset = "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordNumeric === true){
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordNumeric === true && passwordSpecial === true){
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordUppercase === true && passwordSpecial === true){
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordLowercase === true && passwordNumeric === true){
      charset = "abcdefghijklmnopqrstuvwxyz0123456789"
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordLowercase === true && passwordNumeric === true && passwordSpecial === true){
      charset = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordLowercase === true && passwordSpecial === true){
      charset = "abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } else if (passwordNumeric === true && passwordSpecial === true){
      charset = "0123456789~!@#$%^&*()_+-="
      passwordText = "";
      for (i = 0; i < passwordInteger; i++) {
        passwordText += charset.charAt(Math.floor(Math.random() * (charset.length)));
        console.log(passwordText);
      }
    } 
    
    
    
    
    
    for (let i = 0; i < passwordInteger; i++){

    }
    
    
    // console.log(passwordInteger);
    // console.log(passwordUppercase);
    // console.log(passwordLowercase);
    // console.log(passwordSpecial);
}
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* Clicking on Generate password should generate a series of prompts.
the following prompts should ask the user:
- how long the password is (between 8 and 128 characters) [input prompt]
- whether it includes uppercase, lowercase, numeric, and/or special characters [boolean] []
- generate password based on above metrics

Possible combinations:
Just uppercase letters ----
Just lowercase letters ----
Just numbers ----
Just special characters ---- 
--
uppercase + lowercase ----
uppercase + lowercase + numbers ----
uppercase + lowercase + numbers + special characters ----
uppercase + numbers ----
uppercase + numbers + special characters ----
uppercase + special characters ----
lowercase + numbers ----
lowercase + numbers + special characters ----
lowercase + special characters ----
numbers + special characters
*/


