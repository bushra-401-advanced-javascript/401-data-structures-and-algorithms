# Multi-bracket Validation

## Challenge Description 
**Multi-bracket Validation - Queue Implementation**  
Create a function called `multiBracketValidation(input)` that takes a string as its only argument, whixh contains multi-brackets.  
The function should return a boolean representing whether or not the brackets in the string are balanced.  
Types of brackets:
* Round Brackets: `( )`
* Square Brackets: `[ ]`
* Curly Brackets: `{ }`

## Approach & Efficiency
**Approach**  
- used an array implementation of a stack.
- used conditional statements and a loop (for and if)

**Efficiency: Big O Notation**  
- Time Complexity:
  - O(n) --> the length of the stack array increases with the # of nodes (brackets pushed to the stack array)
- Space Complexity:
  - O(n) --> depends on the number of nodes we push to the stack array

  ## WhiteBoard

![whiteboard](./assets/cc13.png)


