// Assignment Code
//Math.floor(Math.random() * (testArray.length - 1)
function generatePassword(){
  var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numericArray = [1,2,3,4,5,6,7,8,9,0];
  var specialArray = ["!","@","#","$","%","^","\&","*","(",")","-","_","+","=","`","~","[","]","{","}","/","?","<",">",",","."];
  console.log(lowerCaseArray);

  var password, lowerCase, upperCase, numeric, special;
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
  //prompt for including lowercase, uppercase, numeric, and/or special characters
  else{
    lowerCase = confirm("Would you like lower case characters in your password?");
    upperCase = confirm("Would you like upper case characters in your password?");
    numeric = confirm("Would you like numeric characters in your password?");
    special = confirm("Would you like special characters in your password?");
  }
  //if user chooses no for all:
  if(!(lowerCase && upperCase && numeric && special) && passwordLength != null){
    window.alert("Password must contain SOME kind of characters!");
  }else{
    
  }

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
