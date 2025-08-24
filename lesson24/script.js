const el = document.getElementById('id1')
el.style.backgroundColor = 'grey'
el.innerHTML = 'HTML changes using JS'

const e2s = document.getElementsByClassName('class1')
e2s[1].style.backgroundColor = 'blue'

var e3s = document.getElementsByTagName('span')
console.log(e3s)

e3s[0].textContent = 'Change'

const e4s = document.querySelectorAll('.class1')
console.log(e4s)

const e5 = document.querySelector('.class1')
console.log(e5)