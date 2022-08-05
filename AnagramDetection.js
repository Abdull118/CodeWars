// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//Solution:

var isAnagram = function(test, original) {
    let newO = original.toLowerCase().split('').sort().join('')
    let newT = test.toLowerCase().split('').sort().join('')
    if(newO === newT){
      return true
    }else{
      return false
    }
  };