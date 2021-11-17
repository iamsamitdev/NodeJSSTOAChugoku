// ES 5
var greet = function(name, message){
    return message + name
}

console.log(greet('Samit','Hello '))

// ES 6
const arrowGreet = (name, message) => {
    return message + name
}

console.log(arrowGreet('Wichai', 'Welcome '))

// ลดรูปได้กรณีมี Return เพียงอย่างเดียว
const arrowGreet2 = (name, message) => message + name
console.log(arrowGreet2('Somchai ','สวัสดี '))

// ยังลดรูปได้อีกกรณีมีการรับ 1 พารามิเตอร์
const arrowGreet3 = message => message
console.log(arrowGreet3('Hello Every one'))

// ตัวอย่าง
const square = x => x * x
console.log(square(3))

// QA
function sayHi(name){
    const result = 'Hello ' + name
    return result
}

// Ans
const sayHi2 = name => {
    const result = 'Hello ' + name
    return result
}

console.log(sayHi2('สามิตร'))