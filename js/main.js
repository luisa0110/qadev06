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


var regExp = new RegExp("^[0-9]{4}-{1}(([0]{1}[1-9]{1})|([1]{1}[0-2]{1})){1}-{1}(((0|1|2){1}[0-9]{1})|([3]{1}[0-1]{1}))$");

//regExp.test(1991-10-01);
//regExp.test(199-10-01);
//regExp.test(1991-13-01);
//regExp.test(1991-10-32);
//regExp.test(1991-10-0);
//regExp.test(1991-0-11);

//function getFirstCapicua(limitSup, limitInf){
//
//}

var isCapicua = function(num){
    var colletionNumbers = '';
    var numAux = num;
    var index = 0;
    // var char;
    while(numAux > 0) {
        numAux = parseInt(numAux);
        if(numAux % 10 != 0)
        { colletionNumbers = colletionNumbers + numAux % 10;
            index ++;
        }
        numAux = numAux / 10;

    }
    colletionNumbers = colletionNumbers.split('');
    colletionNumbers = colletionNumbers.reverse();
    if (Number(colletionNumbers) == num)
    {
        console.log('si');
    }
    else
    {
        console.log('no');
    }
    // for(int i = 0; i< colletionNumbers.length)
    //   console.log(num);
    // console.log(colletionNumbers,  index);
}

var countWords = function(paragraph){
    var counter = 1;
    for(var i = 0; i < paragraph.length; i++)
    {
        if(paragraph[i] == ' ')
            counter++;
    }
    return counter;
};


var currentDate = function (){
    var day = new Date();
    switch (value){
        case 0: day = 'Monday';
            break;
        case 1: day = 'Tuesday';
            break;
        case 2: day = 'Wednesday';
            break;
        case 3: day = 'Thursday';
            break;
        case 4: day = 'Friday';

    }
    console.log('Today is:'  + day.getDay());
};


function reverseString(value){
    //
    var size = value.length - 1;
    var reverseS = '';
    while( size >= 0 ) {
        reverseS = reverseS + value[size];
        size--;
    }
    console.log(value);
    console.log(reverseS);
}

function factorial(number){
    if(typeof(number)==="number"){
        if(number)
        var fact = 1;
        if(number === 0)
            return fact;
        while(number > 0){
            fact = fact*number;
            number--;
        }
        return fact;
    }

}