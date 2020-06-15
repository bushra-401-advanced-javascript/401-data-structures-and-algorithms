'use strict';

//pass a string input as argument, return a boolean (whether or not the brackets in the string are balanced) 
function multiBracketValidation(input) {
  //edge case
  if (input.length <= 1) return false;

  //in this function I will implement a stack using an array
  let matchingBracket; //to match the brackets (oppenning and closing)
  let bracket; //to select each character (bracket) of the string
  let stack = []; //array implementation of the stack
  let openingBrackets = ['[', '{', '('];
  let closingBrackets = [']', '}', ')'];

  //looping over the string
  for (let i = 0; i < input.length; i++) {
    bracket = input[i]; //selecting brackets from the string input
    //comparing and checking
    if (closingBrackets.indexOf(bracket) >= 0) {
      matchingBracket = openingBrackets[closingBrackets.indexOf(bracket)];
      if (stack.length === 0 || stack.pop() != matchingBracket) {
        return false;
      }
    }
    else {
      stack.push(bracket);
    }
  }
  return (stack.length === 0);
}
