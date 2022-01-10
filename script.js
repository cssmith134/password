// Assignment code here






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

function generatePassword() {
  var passwordLength = prompt("how many characters would you like to use? Choose between 8 and 128");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Must be between 8 and 128 chracters long! try again.")
  }
  
  var promptLower = window.prompt("Will this password contain lower case letters?");
    if (promptLower === "" || promptLower ==="null"){
      alert("You must provide a Yes or No");
    }
  var promptUpper = window.prompt("Will this password contain Upper case Letters?");
    if (promptUpper === "" || promptUpper === "null"){
      alert("You must provide a Yes or No");
    }
    
    
    var promptChars = window.prompt("Will this password contain Characters?");
    if (promptChars === "" || promptUpper === "null"){
      alert("You must provide a Yes or No");
    }
     
    var promptNum = window.prompt("Will this password contain numbers?");
    if (promptNum === "" || promptUpper === "null"){
      alert("You must provide a Yes or No");
    }
    var char = ["!", "@", "#", "$", "%", "^", "&", "*", "*",]
    var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var lower = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
    var upper = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", ]

    var userSel = [];

    if(promptLower == "yes") {
      userSel = userSel.concat(lower)
    } 
    
    if(promptUpper == "yes") {
      userSel = userSel.concat(upper)
    }

    if(promptChars == "yes") {
      userSel = userSel.concat(char)
    }

    if(promptNum == "yes")
      userSel = userSel.concat(num)
    // var userSel = char.concat(num)
    var genpassword = "";

    for (i = 0; i < passwordLength; i++) {
      var randomNum = Math.floor(Math.random() * userSel.length)
      var randomChar = userSel[randomNum];
      genpassword += randomChar;
    }

    return genpassword;
   
  }
  



 

