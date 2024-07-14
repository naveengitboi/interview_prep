
function reverseString(str: string) {
  const words = str.split(' ');
  const ans: string[] = []
  function reverseWord(word: string) {
    const l: number = word.length;
    const chars: string[] = word.split('');
    for (let i = 0; i < Math.floor(l / 2); i++) {
      const temp: string = chars[l - i];
      chars[l - i] = chars[i];
      chars[i] = temp;
    }
    return chars.join('');
  }
  const n: number = words.length;
  for (let i = 0; i < n; i++) {
    ans.push(reverseWord(words[i]))
  }
  return ans.join(' ')
}

// console.log('reversing string ', reverseString('Hello world'))

function checkNum(c) {
  return +c === c;
}

// console.log(checkNum("5"))

function duplicateArray(arr: number[]) {
  return [...arr, ...arr]
}

console.log('duplicate give array', duplicateArray([1, 2, 3, 4, 5, 6]))


const CoreConcepts = () => {
  return (
    <h1>Core Concepts. Console it</h1>
  )
}


export default CoreConcepts

