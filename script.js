// Assignment Code
var generateBtn = document.querySelector("#generate");
var sym = "!@#$%^&*=-_"
var num = "1234567890"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
    var passwordChar = "";
    while (true) {
      passwordLength = prompt("Choose the length of your password. This needs to be between 8 - 128");
      if (passwordLength >= 8 && passwordLength <= 128) {
        break;
      }
      alert("Please select a number between 8 - 128");
    }
    specialChars = confirm("Select 'OK' if you would like to include special characters");
    numbers = confirm("Select 'OK' if you would like to include numbers");
    uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
    lowercase = confirm("Select 'OK' if you would like to include lowercase letters");

    if (!symbols, !numbers, !uppercase, !lowercase) {
      alert("You must choose at least one criteria, please try again.");
      return null;
    }

    if (symbols) {
      passwordChar += sym;
    }
    if (numbers) {
      passwordChar += num;
    }
    if (uppercase) {
      passwordChar += upper;
    }
    if (lowercase) {
      passwordChar += lower;
    }

    var pwd = "";
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);