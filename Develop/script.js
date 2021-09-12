// Password Criteria
var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";


//Text area displays the password on screen
var textArea = document.getElementById("password");

function characterTypes() {
  var passwordCapital = confirm("would you like to include uppercase letters?");
  var passwordLowercase = confirm("would you like to include lowercase letters?");
  var passwordNumeric = confirm("would you like to include numbers?");
  var passwordSpecial = confirm("would you like to include special characters?");
  if (passwordCapital === true || passwordLowercase === true || passwordNumeric === true || passwordSpecial === true) {
    //if uppercase letters are chosen, its added to the variable "passString"
    if (passwordCapital === true) {
      passString += capital
    }
    //if lowercase letters are chosen, its added to the variable "passString"
    if (passwordLowercase === true) {
      passString += lower
    }
    //if numbers are chosen, its added to the variable "passString"
    if (passwordNumeric === true) {
      passString += numeric
    }
    //if special characters are chosen, its added to the variable "passString"
    if (passwordSpecial === true) {
      passString += special
    }

  }
  // This else statement alerts if none of the variables were chosen and loops back to the beginning of characterTypes function
  else {
    alert("Please choose at least one character type.")
    characterTypes()
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
