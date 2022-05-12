/*String methods
1.length
2.slice(start, end)
3.substring(start, end)
4.substr(start, length)
5.replace()
6.toUpperCase():
7.toLowerCase():
8.concat()
9.trim()
10.padStart()
11.padEnd()
12.charAt(position)
13.charCodeAt(position)
14.split()
*/
//*****************************************************
//1 length

let stringName="Code Academy"
console.log(stringName.length)

//2.slice(start,end)

let sliceString="something wents wrong"
console.log(sliceString.slice(0,15))

//3.substring(start, end)

let subString="something wents wrong"
console.log(subString.substring(0,15))

//4.substr(start, length)

let substrString="something wents wrong"
console.log(substrString.substr(15,substrString.length))

//5.replace()

let replaceStrig="is it good?"
console.log(replaceStrig.replace("good","bad"))

//6.toUpperCase()
//7.toLowerCase()
console.log("name".toUpperCase())
console.log("SURNAME".toLowerCase())

//8.concat()
console.log("Hello".concat(" World"))

//9.trim()
console.log("    Hi teacher     ")
console.log("    Hi teacher     ".trimStart())
console.log("    Hi teacher     ".trimEnd())
console.log("    Hi teacher     ".trim())

//10.padStart()

console.log("5".padStart(5,"9"))

//11.padEnd()

console.log("5".padEnd(6,"9"))

//12.charAt(position)

console.log("lalafoo".charAt(5))

//13.charCodeAt(position)

console.log("lalafoo".charCodeAt(5))

//14.split()

console.log("banana,apple,pear".split(","))
