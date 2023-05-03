// Assignment Code
//Math.floor(Math.random() * (testArray.length - 1)
function generatePassword(){
  //Length prompts
  var passwordLength = window.prompt("Please enter a password length of at least 8 characters and at most 128 characters.");
  //if box is left empty
  if(passwordLength == null|| passwordLength == ""){
    window.alert("Please enter a password length.");
  }
  //if password is non-numerical
  else if(isNaN(passwordLength)){
    window.alert("Please enter a numerical value.");
  }
  //if password length is outside of range
  else if(passwordLength < 8 || passwordLength > 128){
    window.alert("Please enter an appropriate password length.");
  }
  var password;

  return password;
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
