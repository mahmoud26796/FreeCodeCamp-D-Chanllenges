/**
 *  Pangram
 * given a word or sentance and a string determine if the word\sentence
 * uses all the letters in the given set (string) at least once
 * ignore all the non alphabetical characters
 * ignore letter casing
 */

function isPangram(sentence, letters) {
  sentence = [...sentence]
    .join("")
    .split("")
    .reduce((acc, char) => {
      return /[a-zA-Z]/.test(char) ? acc + char : acc;
    }, "")
    .toLocaleLowerCase();
  const sentenceSet = new Set(sentence);
  const set = new Set(letters);
  let counter = 0;

  for (let i of sentenceSet) {
    if (letters.includes(i)) counter++;
    else counter--;
  }

  return counter === letters.length ? true : false;
}

console.log(isPangram("hello", "helo")); //true
console.log(isPangram("hello", "hel")); // false
console.log(isPangram("hello", "helow")); // false
console.log(isPangram("hello world", "helowrd")); // true
console.log(
  isPangram(
    "The quick brown fox jumps over the lazy dog",
    "abcdefghijklmnopqrstuvwxyz"
  )
); //true
