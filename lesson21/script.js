var a = {
    name: 'Modi',
    age: 74,
    introduce: function () { console.log("Hi, my name is " + this.name + " and I am " + this.age + " years old"); },
    makeSound: function (y) { console.log("Hi My name is Hassan and I am " + y); }
}

console.log(a.name);
console.log(a.age);
a.introduce();
a.makeSound(14);

var i
for (i = 1; i <= 100; i++) {
    a.introduce()
}

var day = 3
switch (day) {
    case 1:
        console.log("Today is Sunday")
        break
    case 2:
        console.log("Today is Monday ")
        break

    case 3:
        console.log("Today is Tuesday")
        break

    default:
        console.log("Today is default day")
}


