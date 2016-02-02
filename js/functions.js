/**
 * Created by mariaalcocer on 2/1/2016.
 */
/**
 * Creating anonymous functions
 */
//var askQuestion = function(){
//  console.log('How are you?');
//};
//
//var sayHello = function(){
//    console.log('hello world');
//    askQuestion();
//};

    var name = 'maria';
/**
 * This function use a anonymous function
 * @param name string
 * @param cb anonymous function
 */
var sayHello3 = function(name,cb){
    if(arguments.length === 1){
        console.log('hello world everybody');
        cb('everybody');
    }
    console.log('hello world ' + name);
    cb(name);
};

sayHello3(name,function(name2){
    console.log('How are you? ' + name2);
});


//sayHello3(function(name2){
//    console.log('How are you? ' + name2);
//});
//// Auto executable functions
//
//function(){
//    var a = 2;
//    var b = 3;
//    var eq = a + b;
//    console.log('Sum  is ', eq);
//}
/**
 * auto-execute function
 */
(function(number1, number2){
        var a = number1;
        var b = number2;
        var eq = a + b;
        console.log('Sum  is ', eq);
})(5,8);


