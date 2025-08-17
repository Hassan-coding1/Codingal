var a = {
    house1: ['vihan', 'ahaan', 'mahaan'],
    house2: ['hassan', 'massan', 'cushion'],
    dateofdata: '2025/08/15sh7',
    createdBy: 'Anku Gupta',
    howMuchOld: 42
}

var student = {
    name: 'vihan',
    age: 15,
    bloodGroup: 'O-',
    intro: function () {
        console.log("my name is ghost")
    },
    siblings: true,
    phoneNumber: '863786823783'
}

console.log(a.howMuchOld)
console.log(a['howMuchOld'])
console.log(a.house1)
console.log(student.siblings)
student.intro()

console.log(Math.random())
console.log(Math.PI)
console.log(Math.floor(9.9))
console.log(Math.ceil(9.9))

function add(){
    var i=0
    var results=0
    for(i=0;i<arguments.length;i++){
        results=arguments[i]+results
    }
    return results
}

console.log(add(2,4,2,4,6,4,7,8,6,4,3,3,4,4,3,2,1,4,65,54))
