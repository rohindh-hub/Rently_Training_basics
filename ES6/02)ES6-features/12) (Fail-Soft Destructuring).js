var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
console.log(a === 7)
console.log(b === 42)
console.log(c === 3)
console.log(d === undefined)