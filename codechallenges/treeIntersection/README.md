# Tree Intersection

## Challenge Description

Find common values in 2 binary trees.

### Feature Tasks:

- Write a function called `tree_intersection` that takes two binary tree parameters.
- return a set of values found in both trees.

### I/O Example:

- I:  
  Tree 1
![tree1](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-32/BT1.PNG)

  Tree 2
![tree2](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-32/BT2.PNG)

- O:  
Common Node values   
`[100,160,125,175,200,350,500]`

## Approach & Efficiency

### Approach:   
**Recursive**  
- recursion function
- conditional statement

### Big O:

- **Time Complexity**:  

  **O(n+m)**
  - `n`: number of nodes in the first tree 
  - `m`: number of nodes in the second tree

- **Space Complexity**:

  **O(n+m)**
  - `n`: number of nodes in the first tree
  - `m`: number of nodes in the second tree

## Whiteboard
![whitebaord](./assets/cc32.png)
