// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var passwordLength
    while (true) {
      passwordLength = prompt("Choose the length of your password. This needs to be between 8 - 128");
      if (passwordLength >= 8 && passwordLength <= 128) {
        break;
      }
      alert("Please select a number between 8 - 128");
    }
    var specialChars = confirm("Select 'OK' if you would like to include special characters");
    var numbers = confirm("Select 'OK' if you would like to include numbers")
    var uppercase = confirm("Select 'OK' if you would like to include uppercase letters")
    var lowercase = confirm("Select 'OK' if you would like to include lowercase letters")
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);