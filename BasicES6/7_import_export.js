// Import วิธีที่ 1
import { sayHi, sayBye } from './say.js'

// Import วิธีที่ 2
import * as say from './say.js'

sayHi('John')
sayBye('John')

say.sayHi('Samit')
say.sayBye('Samit')

// การ Import จาก Class ที่เป็นการ Export default
import User from './user.js'

// สร้าง Object
const obj = new User('Jonhy')
console.log(obj.name)
obj.sayHi()