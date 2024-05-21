var num = "12121";
var str2 = "mango";
var str = "madam";

function isPalindrome(string) {
 
  let rev = "";
  let str = string.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}
var isNumberPalindrome = isPalindrome(num);
var str2output = isPalindrome(str2);
var isStringPalindrome = isPalindrome(str);

if (isNumberPalindrome === true) {
  console.log(num + " is palindrome Number.");
}
if (isStringPalindrome === true) {
  console.log(str + " is palindrome Number.");
}
if (str2output === false) {
  console.log(str2 + " is not a palindrome string.");
}


 // let rev = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   // console.log("str[i] = ", str[i]);
  //   rev += str[i];
  //   // console.log("rev", rev);
  // }
  // if (rev == str) {
  //   return true;
  // } else {
  //   return false;
  // }