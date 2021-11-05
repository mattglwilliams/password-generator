// Assignment Code
// Generate button variable
var generateBtn = document.querySelector("#generate");

// Strings of the characters that will be used to make up the random password
var sym = "!@#$%^&*=-_"
var num = "1234567890"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"

function generatePassword() {
  // Empty string to hold the characters that will be chosen from at random
  var passwordChar = "";
  // Password length prompt loop
  while (true) {
    passwordLength = parseInt(prompt("Choose the length of your password. This needs to be between 8 - 128"));
    // If user chooses a number equal to or above 8 and equal to or below 128, move on
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    // Else, return this alert and loop back to the start so they can choose a valid number
    alert("Please select a number between 8 - 128");
  }
  // Confirmations for users to select their criteria 
  symbols = confirm("Select 'OK' if you would like to include special characters");
  numbers = confirm("Select 'OK' if you would like to include numbers");
  uppercase = confirm("Select 'OK' if you would like to include uppercase letters");
  lowercase = confirm("Select 'OK' if you would like to include lowercase letters");

  // Alert letting them know they need to select at least one criteria option
  if (!symbols, !numbers, !uppercase, !lowercase) {
    alert("You must choose at least one criteria, please try again.");
    return null;
  }

  // Concatinating the characters with the passwordChar string
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

  // String the random characters will be added too
  var pwd = "";
  // For loop to select random characters from the selected criteria and based on the length the user passed
  for (var i = 0; i < passwordLength; i++) {
    pwd += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  // Passing the generated password to the writePassword function
  return (pwd);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);