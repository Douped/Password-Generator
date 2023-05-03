// Assignment Code
//Math.floor(Math.random() * (testArray.length - 1)
function generatePassword(){
  var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //learned the map function to save myself time
  var upperCaseArray = lowerCaseArray.map(function(x){return x.toUpperCase();});
  var numericArray = ["1","2","3","4","5","6","7","8","9","0"];
  var specialArray = ["!","@","#","$","%","^","\&","*","(",")","-","_","+","=","`","~","[","]","{","}","/","?","<",">",",","."];
  var randomArray = [];
  var password = "Your Secure Password";
  var lowerCase, upperCase, numeric, special;

  //Length prompts
  var passwordLength = window.prompt("Please enter a password length of at least 8 characters and at most 128 characters.");
  //if box is left empty
  if(passwordLength == null|| passwordLength == ""){
    window.alert("Please enter a password length.");
    return password;
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
    if(lowerCase = confirm("Would you like lower case characters in your password?")){
      randomArray = randomArray.concat(lowerCaseArray);
    }
    if(upperCase = confirm("Would you like upper case characters in your password?")){
      randomArray = randomArray.concat(upperCaseArray);
    }
    if(numeric = confirm("Would you like numeric characters in your password?")){
      randomArray = randomArray.concat(numericArray);
    }
    if(special = confirm("Would you like special characters in your password?")){
      randomArray = randomArray.concat(specialArray);
    }
    //if nothing is added to the array and no uppercase characters are allowed:
    if(randomArray.length == 0){
      window.alert("Password must contain at least one type of character")
    }
    //if promt is complete generate password
    else{
      password = '';
      for(i = 0; i<passwordLength; i++){
        password += randomArray[(Math.floor(Math.random() * (randomArray.length - 1)))];
      }
      return password;
    }
  }
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
