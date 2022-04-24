
// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var upperCode = ["A","B","C","D","E","F","G", "H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCode = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberCode = ["1","2","3","4","5","6","7","8","9","0"];
var specialCode = ["!","@","#","$","%","^","&","*","_","-"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

var generatePassword = function(){
  var passLength = window.prompt("How many characters would you like your password to contain?"); 
  // // create a loop to check length
  // for ( var i=0; passLength.length >= 8 && passLength.length < 129 ) {
  //   if (passLength.length < 8){
  //     window.alert("Password must contain atleast 8 characters.")
  //     if(passLength.length > 129)  {
  //       window.alert ("Password must contain less than 129 characters.") 
  //     } 
  //   }
  // }
  // return passLength.length();
  
  var passUpper = window.confirm("Would you like Upper Case character? Press Okay for yes/");
  var passLower = window.confirm("Would you like Lower Case character? Press Okay for yes/");
  var passNumber = window.confirm("Would you like Number Case character? Press Okay for yes/");
  var passSpecial = window.confirm("Would you like Special Character Case character? Press Okay for yes/");

  
  // create an empty array where we can push possible characters to use  
  var possibleCharacters = [];
  // use if statement to check what characters user wants
  if (passUpper === true ){
    possibleCharacters = possibleCharacters.concat(upperCode)
  }
  if (passLower === true ){
    possibleCharacters = possibleCharacters.concat(lowerCode)
  }
  if (passNumber === true ){
    possibleCharacters = possibleCharacters.concat(numberCode)
  }
  if (passSpecial === true ){
    possibleCharacters = possibleCharacters.concat(specialCode)
  }

  // create an empty array for building password
  var passwordCharacter = [];
  // loop over the possible characters array and grab a random character
  for (var i=0; i < passLength; i++){
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var randomCharacter = possibleCharacters[randomIndex]
    passwordCharacter.push(randomCharacter);
    
  }

  return passwordCharacter.join("");
};


