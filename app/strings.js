// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  let string = str;
  let index = position;
  let character = string.charAt(index);
  console.log(character);
  return character;

}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  let firstStr = str1;
  let secStr = str2;
  let space = seperator;

  let sentence = firstStr.concat(space, secStr)
  console.log(sentence);
  return sentence
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  let string = str;
  let index = position;

  let letter = string.slice(index, index + 1);

  let upperLetter = letter.toUpperCase();

  let newStr = string.replace(string[index], upperLetter);

  console.log(newStr)
  return upperLetter;
}