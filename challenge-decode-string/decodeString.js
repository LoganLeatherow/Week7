// Write your code below this line
const decoder = string => {
    let decipher = Number(string[0])
    let decoded = ""
    for (let i = 1; i < string.length; i++) {
        let value = string[i].charCodeAt() + decipher
        decoded += String.fromCharCode(value)
}
return decoded
}

console.log(decoder("2fcjjm"))








// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"