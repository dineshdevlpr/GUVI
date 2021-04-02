let arr = "EVERYTHING IS IN CAPITAL LETTERS"
let titleCase = str => {
  return arr.toLowerCase().split(' ').map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

console.log(titleCase(arr))
