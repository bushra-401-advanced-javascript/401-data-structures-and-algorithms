'use strict';

const InsertionSort = require('../codechallenges/insertionSort/code');

describe('\n Can successfully sort an array incrementally', () => {
  it('sort an array\n', () => {
    let arr = [8,4,23,42,16,15];
    let sortedArr = InsertionSort(arr);
    expect(sortedArr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('sort a reverse-sorted array\n', () => {
    let arr = [20,18,12,8,5,-2];
    let sortedArr = InsertionSort(arr);
    expect(sortedArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('sort a few-uniques array\n', () => {
    let arr = [5,12,7,5,5,7];
    let sortedArr = InsertionSort(arr);
    expect(sortedArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('sort a nearly-sorted array\n', () => {
    let arr = [2,3,5,7,13,11];
    let sortedArr = InsertionSort(arr);
    expect(sortedArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});