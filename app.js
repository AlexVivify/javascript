let outAnon = "Outside of anonymous function";
(function(){

  let inAnon = "Inside of anonymous function";

})()
function func1(){
  console.log(scriptTag)
}
function func2(){
  console.log(inAnon)
}
function func3(){
  console.log(outAnon)
}

//checking variable scope during load
console.log(separatedBefore);
console.log(separatedAfter);



///////////////////////////
//JSON object
obj = {
  "firstname":'Pera',
  "lastname":'Peric'
}
//Array of JSON objects
array = [
  {
    "firstname":'Pera',
    "lastname":'Peric'
  },
  {
    "firstname":'Sima',
    "lastname":'Simic'
  }
]
//class Person ES5
function Person(firstName, lastName, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}
//Object instantiating
obj = new Person('John', 'Smith', 'male');

//Inheritance
function Inherited(firstName, lastName, gender, age){
    Person.call(this, firstName, lastName, gender);
    this.age = age;
}
inheritedObj = new Inherited('Alan', 'Smith', 'male', 30);
//static method and static variable
Person.sayHello = function(){
  alert('Hello')
}
Person.value = 22;
//callback
callback = function(){
  console.log('callback');
}
example = function(callback){
  console.log('example');
  callback();
}
example(callback);
//promise
let promise = new Promise(function(resolve, reject){
  statement = false;
  if(statement){
    resolve('Resolved');
  }else{
    reject('Rejected');
  }
});
promise.then(function(fromResolve){
  console.log(fromResolve)
}).catch(function(fromReject){
  console.log(fromReject)
})






