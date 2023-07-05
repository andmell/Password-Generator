var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword(){
    let passwordInteger = prompt("Specify a length for your password","A number between 8 and 128");
    while (!/^[0-9]+$/.test(passwordInteger)) { //a line of regex meant to test if the input is actually a number and not some nonsense. Thank you Umang Galaiya for this!
    alert("You did not enter a number."); return
    }if (passwordInteger < 8) {
      alert("Please choose a number between 8 and 128"); return //need to return after the alert to ensure that the function ceases if a wrong number is used.
    } else if (passwordInteger > 128) {
      alert("Please choose a number between 8 and 128"); return
    } 
    let passwordUppercase = confirm("Should your password have uppercase letters?"); //This confirm message, and the following three, are necessary booleans to determine the character base of the generated password.
    let passwordLowercase = confirm("Should your password have lowercase letters?");
    let passwordNumeric = confirm("Should your password have numbers in it?");
    let passwordSpecial = confirm("Should your password have special characters in it?");
    let characterBase = "" // this will be the pool of characters that the for-loop will pull from to go into the generated password.
    let password = "" // the final output of the password.

    if (passwordUppercase){ //totally did not know that if-statements could be standalone. Duh.
      characterBase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } 
    if (passwordLowercase){
      characterBase += "abcdefghijklmnopqrstuvwxyz"
    } 
    if (passwordNumeric){
      characterBase += "0123456789"
    } 
    if (passwordSpecial){
      characterBase += "~!@#$%^&*()_+-="
    }  
    for (i = 0; i < passwordInteger; i++) {
          password += characterBase.charAt(Math.floor(Math.random() * (characterBase.length))); //the issue with using a math.random method is that, potentially some characters might be missed if a smaller password integer is used. 
        }
      return password;
  }
}

generateBtn.addEventListener("click", writePassword);

