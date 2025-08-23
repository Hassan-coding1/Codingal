var a = [true , false , false , true , true , false]
var b = [1 , 4 , 5 , 7 , 10 , 11 , 19 , 20]
var c = ["Casillas" , "Ramos" , "Pepe" , "Ronaldo" , "Messi" , "Neymar" , "L. Yamal" , "D. Jota"]

console.log(a[0])
console.log(a[3])
console.log(a[7])

console.log(b[2])
console.log(b[5])
console.log(b[9])

console.log(c[0])
console.log(c[2])
console.log(c[7])

console.log(a.length)
console.log(b.length)
console.log(c.length)

a.forEach(function (element){
    console.log(element)
})

b.forEach((element) => {
    console.log(element)
})

c.forEach(element => console.log(element))

function sum(a,b,c){
    return a+b+c
}

function average(a,b,c){
    return sum(a,b,c)/3
}

var s = sum(39,42,42)
var avg = average(13,13,13)

console.log(s)
console.log(avg)
