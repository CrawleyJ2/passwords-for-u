// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const symbolEl = document.getElementById('symbol');
const numberEl = document.getElementById('number');
const generateEl = document.getElementById('generate');

const randoms = {
  upper: randomUpper,
  lower: randomLower,
  number: randomNumber,
  symbol: randomSymbol,
};

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = upperEl.checked;
  const hasLower = lowerEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword( 
    hasUpper, 
    hasLower, 
    hasNumber, 
    hasSymbol, 
    length);
});

// random letter generators - https://www.alt-codes.net/
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}
// random number generator
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// random symbol generator
function randomSymbol() {
  const symbols = '!@#$%^&*()';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(lower, upper, number, symbol, length) {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  let writePassword = '';

  const typesCount = lower + upper + number + symbol;

  const typesArray = [{lower}, {upper}, {number}, {symbol}].filter (item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (let i = o; i < length; i += typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys (type)[0];

      writePassword += randoms[funcName]();
    });
  }

  const finalPassword = writePassword.slice(0, length);

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
