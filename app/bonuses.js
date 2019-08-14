//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let position = 5;
  let letter = str.charAt(position);
  letter = letter.toUpperCase();
  let upperStr = str.replace(str[position], letter);
  let finalStr = upperStr.split(' ').join('');
  console.log(finalStr)
  return finalStr;
}
