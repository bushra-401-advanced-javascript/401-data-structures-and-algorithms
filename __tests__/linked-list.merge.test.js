const LinkedList = require('../codechallenges/llMerge/linked-list');
const mergedList = require('../codechallenges/llMerge/ll-merge');

describe('Given Two Valid Linked Lists, Can Successfuly Merge Them Into A Zipped List', () => {
  it('mergedList() Function', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    expect(mergedList(list1, list2)).toBe('"{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL"');

  });
});

describe('Given Two Valid Linked Lists Of Different Lengths, Can Successfuly Merge Them Into A Zipped List With Proper Tail', () => {
  it('mergedList() Function', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    let list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    list2.append(10);
    list2.append(12);
    expect(mergedList(list1, list2)).toBe('"{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 10 } -> { 12 } -> NULL"');
  
  });
});

describe('Given A Valid LL And An Empty LL, Can Successfuly Return The Valid LL', () => {
  it('mergedList() Function', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    let list2 = new LinkedList();
    expect(mergedList(list1, list2)).toBe('"{ 1 } -> { 3 } -> { 5 } -> NULL"');
  
  });
});

describe('Given Two Empty LLs, Can Successfuly Return An Empty LL', () => {
  it('mergedList() Function', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    expect(mergedList(list1, list2)).toBe('"NULL"');
    
  });
});


