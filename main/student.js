"use strict"
let Person = require('./person')
// Write your code here
class Student extends Person{
  constructor(name, age, kclass){
    super(name,age)
    this.class = kclass
  }
  introduce(){
    return 'My name is ' + this.name + '. I am ' + this.age+' years old. I am a Student. I am at Class ' + this.class + '.'
  }
}
module.exports = Student
