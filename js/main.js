/**
 * Created by mariaalcocer on 1/12/2016.
 */
console.log('hi all js');
console.log('This line is from HTML');
localStorage.setItem('name','duve');
/**
 * returns
 * @param name
 * @returns {string}
 */

var sayHello = function(name) {

    return (arguments.length == 0) ? 'Hello world' : 'Hello ' + name;
};
var sayHello2 = function(name) {

    if(arguments.length == 0)
        return 'Hello world';
    return 'Hello ' + name;
};
var greeting = sayHello2('Maria');
console.log(greeting);

var nano = {
    name:'Nano',
    bark:function(){
        console.log(this.name + 'is barking');
    }
};

var Estudiante = function(name, age) {
    this.name = name;
    this.age = age;
    this.note = '';
};

var doOperations = function(number){

    console.log('MAX is', getMaxNumber(number, arguments.length));
    console.log('MIN is', getMinNumber());
    console.log('AVERAGE is', getAvgerage());
    console.log('SUM', getSum());
};

var getMaxNumber = function(numbers, size){
    if(numbers[size-1]>numbers[size-2])
        return numbers[size-1];

};

