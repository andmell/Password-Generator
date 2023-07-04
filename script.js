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
*/


