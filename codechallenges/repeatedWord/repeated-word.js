'use strict';

const Hashtable = require('../hashtable/hashtable');
const Hashmap = Hashtable.hashmap;


function repeatedWords(str){
  let hashmap = new Hashmap(1000);
  let words = str.split(/\W+/g);
  let repeatedWord = '';
  for (let i = 0; i < words.length; i++) {
    if (!hashmap.contains(words[i].toLowerCase()).includes(false)) {
      repeatedWord = words[i];
      break;
    }
    else {
      hashmap.add(words[i].toLowerCase(), 'String');
    }
  }
  return repeatedWord || 'Unique String: No word was repeated..';
}

/////////////////////////////

const str1 = 'Once upon a time, there was a brave princess who...';
const str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

console.log('Repeated Word Is: ', repeatedWords(str1), '\n');
console.log('Repeated Word Is: ', repeatedWords(str2), '\n');
console.log('Repeated Word Is: ', repeatedWords(str3), '\n');
