// Assignment Code
const generateBtn = document.querySelector("#generate");
const passwordDisplay = document.querySelector("#card-body");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
const nums = "0123456789".split("");
const specialChar = " !@#$%^&*()_-+=?<>;:".split("");
// const specialC = ' !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~';

let randomPasswordArr = [];

function generatePassword() {
  randomPasswordArr = [];
  let passwordLength = prompt(
    "Please select password length",
    "8 - 128 characters"
  );

  let isUpper = confirm(
    "Do you want to allow Upper case letters in your password?"
  );
  if (isUpper) {
    randomPasswordArr.push(...upperCase);
  }
  let isLower = confirm(
    "Do you want to allow lower case letters in your password?"
  );
  if (isLower) {
    randomPasswordArr.push(...lowerCase);
  }
  let isNum = confirm("Do you want to allow numbers in your password?");
  if (isNum) {
    randomPasswordArr.push(...nums);
  }
  let isSpecialChar = confirm(
    "Do you want to allow special characters in your password?"
  );
  if (isSpecialChar) {
    randomPasswordArr.push(...specialChar);
  }
  console.log(randomPasswordArr);
  // let newPassArr = [];

  let newPassArr = [];
  for (let i = passwordLength; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * randomPasswordArr.length);
    console.log(randomPasswordArr[randomIndex]);
    newPassArr.push(randomPasswordArr[randomIndex]);
  }
  return newPassArr.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
